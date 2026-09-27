import { List, Range } from "immutable";

import type { ReactNode } from "react";
import { LinePartCss } from "../LinePart";

export const ENCODED_NEWLINE = 10; // \n
export const ENCODED_CARRIAGE_RETURN = 13; // \r
export const SEARCH_BAR_HEIGHT = 45;

export const isNewline = (current: number) =>
    current === ENCODED_NEWLINE || current === ENCODED_CARRIAGE_RETURN;

export const getScrollIndex = ({
    follow = false,
    scrollToLine = 0,
    previousCount = 0,
    count = 0,
    offset = 0,
}) => {
    if (follow) {
        return count - 1 - offset;
    } else if (scrollToLine && previousCount > scrollToLine) {
        return -1;
    } else if (scrollToLine) {
        return scrollToLine - 1 - offset;
    }

    return -1;
};

export const getHighlightRange = (highlight: any) => {
    /**
     * Set to Range(0, 0) if:
     * 1) highlight doesn't evaluate to "true"
     * 2) highlight is not a number
     * 3) highlight is an array where a value isn't a number
     */
    if (
        !highlight ||
        (Array.isArray(highlight) &&
            (isNaN(highlight[0]) || isNaN(highlight[1]))) ||
        (!Array.isArray(highlight) && isNaN(highlight))
    ) {
        return Range(0, 0);
    }

    if (!Array.isArray(highlight)) {
        return Range(highlight, highlight + 1);
    }

    if (highlight.length === 1) {
        return Range(highlight[0], highlight[0] + 1);
    }

    return Range(highlight[0], highlight[1] + 1);
};

export const bufferConcat = (a: Uint8Array, b: Uint8Array) => {
    const buffer = new Uint8Array(a.length + b.length);

    buffer.set(a, 0);
    buffer.set(b, a.length);

    return buffer;
};

export const convertBufferToLines = (
    currentArray: Uint8Array,
    previousArray?: Uint8Array
) => {
    const buffer = previousArray
        ? bufferConcat(previousArray, currentArray)
        : currentArray;
    const { length } = buffer;
    let lastNewlineIndex = 0;
    let index = 0;
    const lines = List<Uint8Array>().withMutations((lines) => {
        while (index < length) {
            const current = buffer[index];
            const next = buffer[index + 1];

            if (isNewline(current)) {
                lines.push(buffer.subarray(lastNewlineIndex, index));
                lastNewlineIndex =
                    current === ENCODED_CARRIAGE_RETURN &&
                    next === ENCODED_NEWLINE
                        ? index + 2
                        : index + 1;

                index = lastNewlineIndex;
            } else {
                index += 1;
            }
        }

        if (!previousArray && index !== lastNewlineIndex) {
            lines.push(buffer.slice(lastNewlineIndex));
        }
    });

    return {
        lines,
        remaining:
            index !== lastNewlineIndex ? buffer.slice(lastNewlineIndex) : null,
    };
};

export const getLinesLengthRanges = (rawLog: Uint8Array) => {
    const { length } = rawLog;
    const linesRanges = [];
    let lastNewlineIndex = 0;
    let index = 0;

    while (index < length) {
        const current = rawLog[index];
        const next = rawLog[index + 1];

        if (isNewline(current)) {
            linesRanges.push(index);
            lastNewlineIndex =
                current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE
                    ? index + 2
                    : index + 1;

            index = lastNewlineIndex;
        } else {
            index += 1;
        }
    }

    return linesRanges;
};

/**
 * Builds the global RegExp used to find search matches.
 * Plain-text keywords are escaped so they match literally.
 *
 * @param keywords - The search text or regular expression pattern.
 * @param caseInsensitive - Whether to ignore case.
 * @param isRegex - Treat `keywords` as a regular expression.
 * @returns The RegExp, or undefined if `keywords` is empty or an invalid pattern.
 */
export const buildSearchRegExp = (
    keywords: string | undefined,
    caseInsensitive?: boolean,
    isRegex?: boolean
) => {
    if (!keywords) {
        return undefined;
    }

    const source = isRegex
        ? keywords
        : keywords.replace(/[-[\]{}()*+?.,\^$|#\s]/g, "\$&");

    try {
        return new RegExp(source, caseInsensitive ? "gi" : "g");
    } catch {
        return undefined;
    }
};

export const searchFormatPart =
    ({
        searchKeywords,
        nextFormatPart,
        caseInsensitive,
        isRegex,
        replaceJsx,
        // True if this is the line the browser search is highlighting
        selectedLine,
        replaceJsxHighlight,
        /**
         * The 1-based position of the match within the line that the
         * browser-like search is currently on. Used when a line has
         * several matches so only the selected one gets the special
         * highlight.
         */
        highlightedWordLocation,
    }: any) =>
    (part: any) => {
        const formattedPart = nextFormatPart ? nextFormatPart(part) : part;
        const regex = buildSearchRegExp(searchKeywords, caseInsensitive, isRegex);

        if (!regex || typeof formattedPart !== "string") {
            return formattedPart;
        }

        const nodes: ReactNode[] = [];
        let lastIndex = 0;
        let matchCount = 0;

        for (const match of formattedPart.matchAll(regex)) {
            // Skip empty matches such as "^" or "a*"
            if (!match[0]) {
                continue;
            }

            matchCount += 1;
            const replace =
                selectedLine && matchCount === highlightedWordLocation
                    ? replaceJsxHighlight
                    : replaceJsx;

            nodes.push(formattedPart.slice(lastIndex, match.index));
            nodes.push(replace(match[0], `match-${match.index}`));
            lastIndex = match.index! + match[0].length;
        }

        if (!matchCount) {
            return formattedPart;
        }

        nodes.push(formattedPart.slice(lastIndex));

        return nodes.filter((node) => node !== "");
    };

// General Email Regex (RFC 5322 Official Standard)
const emailPattern =
    '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")';
const emailDomainPattern = "[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$";
const emailRegex = new RegExp(`${emailPattern}@${emailDomainPattern}`);
const protocolClause = "(((http|ftp)?s?s?)(:)(/{2}))";
// Add some RegEx magic from xterm.js | xterm-addon-web-links
// https://github.com/xtermjs/xterm.js/blob/master/addons/addon-web-links/src/WebLinksAddon.ts
// consider everthing starting with http:// or https://
// up to first whitespace, `"` or `'` as url
// NOTE: The repeated end clause is needed to not match a dangling `:`
// resembling the old (...)*([^:"\'\\s]) final path clause
// additionally exclude early + final:
// - unsafe from rfc3986: !*'()
// - unsafe chars from rfc1738: {}|\^~[]` (minus [] as we need them for ipv6 adresses, also allow ~)
// also exclude as finals:
// - final interpunction like ,.!?
// - any sort of brackets <>()[]{} (not spec conform, but often used to enclose urls)
// - unsafe chars from rfc1738: {}|\^~[]`
const strictUrlRegex =
    /https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;

/**
 * Parses an array of text lines and identifies URLs and email addresses, converting them into clickable links.
 *
 * @param lines - Array of line objects containing text to parse
 * @returns Array of LinePartCss objects with identified links and emails marked up
 */
export const parseLinks = (lines: any[]): LinePartCss[] => {
    const result: LinePartCss[] = [];

    lines.forEach((line) => {
        // Split line into words
        const tokens = line.text.split(" ");
        let lastToken = "";

        let found = false; // Tracks if any links were found
        let partial = ""; // Accumulates non-link text

        tokens.forEach((token: string) => {
            lastToken = token;
            // Check if text matches URL pattern
            if (token.search(strictUrlRegex) > -1) {
                // Push accumulated non-link text if any
                result.push({ text: partial });
                partial = "";
                found = true;

                // Check if text is an email address
                if (token.search(emailRegex) > -1) {
                    result.push({ token, email: true });
                    return;
                }

                // Add https:// prefix if protocol is missing
                if (token.search(protocolClause) === -1) {
                    result.push({ text: `https://${token}`, link: true });
                    return;
                }

                // Split text into protocol and non-protocol parts
                const parts = token.split(new RegExp(/(\()*([^\)]+)(\))*/)).filter(Boolean);
                parts.forEach((part) => {
                    if (part.search(protocolClause) > -1) {
                        result.push({ text: part, link: true });
                    } else {
                        result.push({ text: part });
                    }
                });

                return;
            }

            // Accumulate non-link text
            partial += token + " ";
        });

        // If no links found, push the entire line
        if (!found) {
            result.push(line);
        }
        // Otherwise, add any remainder set by the last iteration of the loop
        else if (partial.length > 0) {
            // There is known to be at least one token if partial is set
            if (lastToken.endsWith(" ")) {
                result.push({ text: partial });
            }
            else {
                // Don't add a space to the final token if the line didn't end with a space already
                result.push({ text: partial.trimEnd() });
            }
        }
    });

    return result;
};
