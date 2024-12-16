import { List, Range } from "immutable";

import reactStringReplace from "react-string-replace";
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

export const searchFormatPart =
    ({
        searchKeywords,
        nextFormatPart,
        caseInsensitive,
        replaceJsx,
        // True if this is the line the browser search is highlighting
        selectedLine,
        replaceJsxHighlight,
        /**
         * highlightedWordLocation is a bit weird, it deals with
         * the special highlighting of a searched term
         * if it is the one the browser-like search is currently
         * highlighting. This is to deal with the case where there are
         * multiple instances of the searched term in the same line,
         * to make sure the correct one is highlighted.
         */
        highlightedWordLocation,
    }: any) =>
    (part: any) => {
        let formattedPart = part;

        if (nextFormatPart) {
            formattedPart = nextFormatPart(part);
        }

        // Escape out regex characters so they're treated as normal
        // characters when we use regex to search for them.
        const regexKeywords = searchKeywords.replace(
            /[-[\]{}()*+?.,\\^$|#\s]/g,
            "\\$&"
        );

        // Split part on keywords
        const splitExp = new RegExp(
            `(?=${regexKeywords})`,
            caseInsensitive ? "i" : undefined
        );
        const splitParts = part.split(splitExp);

        // Expression to replace keywords
        const replaceExp = new RegExp(
            `(${regexKeywords})`,
            caseInsensitive ? "i" : undefined
        );

        // This deals with the special highlighting that occurs when a
        // line is selected using the browser search
        const handleHighlighting = () => {
            // If this line is selected so we need to deal with special highlighting
            if (selectedLine) {
                // This is the special case where the searched
                // word is at the very start of the string
                if (splitParts.length === 1) {
                    formattedPart = reactStringReplace(
                        formattedPart,
                        regexKeywords,
                        replaceJsxHighlight
                    );
                } else {
                    // This highlights the special color
                    // if the word is selected, otherwise, just
                    // the regular matched search term color
                    formattedPart = splitParts.map(
                        (splitPart: string, index: number) =>
                            reactStringReplace(
                                splitPart,
                                replaceExp,
                                index === highlightedWordLocation
                                    ? replaceJsxHighlight
                                    : replaceJsx
                            )
                    );
                }
            }
            // Finally, just do regular highlighting since this line isn't selected
            else {
                formattedPart = reactStringReplace(
                    formattedPart,
                    replaceExp,
                    replaceJsx
                );
            }

            return formattedPart;
        };

        if (caseInsensitive) {
            if (part.toLowerCase().includes(searchKeywords.toLowerCase())) {
                formattedPart = handleHighlighting();
            }
        } else if (part.includes(searchKeywords)) {
            formattedPart = handleHighlighting();
        }

        return formattedPart;
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
        const arr = line.text.split(" ");

        let found = false; // Tracks if any links were found
        let partial = ""; // Accumulates non-link text

        arr.forEach((text: string) => {
            // Check if text matches URL pattern
            if (text.search(strictUrlRegex) > -1) {
                // Push accumulated non-link text if any
                result.push({ text: partial.trimEnd() });
                partial = "";
                found = true;

                // Check if text is an email address
                if (text.search(emailRegex) > -1) {
                    result.push({ text, email: true });
                    return;
                }

                // Add https:// prefix if protocol is missing
                if (text.search(protocolClause) === -1) {
                    result.push({ text: `https://${text}`, link: true });
                    return;
                }

                // Split text into protocol and non-protocol parts
                const parts = text.split(new RegExp(`(${protocolClause}.*)`));
                if (parts.length > 1) {
                    // Push non-link part if it exists
                    if (parts[0]) {
                        result.push({
                            text: parts[0],
                        });
                    }
                    // Push link part
                    result.push({
                        text: parts[1],
                        link: true,
                    });
                } else {
                    result.push({
                        text,
                        link: true,
                    });
                }

                return;
            }

            // Accumulate non-link text
            partial += text + " ";
        });

        // If no links found, push the entire line
        if (!found) {
            result.push(line);
        }
    });

    return result;
};
