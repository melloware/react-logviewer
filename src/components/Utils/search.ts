import { decode, encode } from "./encoding";
import { buildSearchRegExp, getLinesLengthRanges } from "./utils";

/**
 * Implements the Knuth-Morris-Pratt (KMP) string searching algorithm.
 * This function searches for occurrences of a keyword within a given log.
 *
 * @param {string | undefined} rawKeywords - The search term to look for.
 * @param {Uint8Array} rawLog - The log data to search within.
 * @returns {number[]} An array of indices where the keyword is found in the log.
 */
export const searchIndexes = (
    rawKeywords: string | undefined,
    rawLog: Uint8Array
) => {
    // Encode the keywords for byte-level comparison
    const keywords = Array.from(encode(rawKeywords));
    // Initialize the KMP failure function table
    const table = [-1, 0];
    const keywordsLength = keywords.length;
    const fileLength = rawLog.length;
    const maxKeywordsIndex = keywordsLength - 1;
    let keywordsIndex = 0;
    let fileIndex = 0;
    let index = 0;
    let position = 2;

    // Build the KMP failure function table
    // This preprocessing step takes O(keywordsLength) time
    while (position < keywordsLength) {
        if (keywords[position - 1] === keywords[keywordsIndex]) {
            keywordsIndex += 1;
            table[position] = keywordsIndex;
            position += 1;
        } else if (keywordsIndex > 0) {
            keywordsIndex = table[keywordsIndex];
        } else {
            table[position] = 0;
            position += 1;
        }
    }

    const results = [];

    // Perform the KMP search
    // This main search step takes O(fileLength) time
    while (fileIndex + index < fileLength) {
        if (keywords[index] === rawLog[fileIndex + index]) {
            if (index === maxKeywordsIndex) {
                // Found a match, store the starting index
                results.push(fileIndex);
            }
            index += 1;
        } else if (table[index] > -1) {
            // Partial match, use the failure function to skip comparisons
            fileIndex = fileIndex + index - table[index];
            index = table[index];
        } else {
            // Mismatch, move to the next character in the file
            index = 0;
            fileIndex += 1;
        }
    }

    return results;
};

/**
 * Searches log lines with a regular expression. Slower than the KMP search
 * on large logs, so it is only used when regex search is enabled.
 *
 * @param {string | undefined} pattern - The regular expression pattern.
 * @param {Uint8Array} rawLog - The log data to search within.
 * @param {boolean} isCaseInsensitive - Whether the search should be case-insensitive.
 * @returns {number[]} The line number of each match, so a line with two
 * matches appears twice. Empty if the pattern is invalid.
 */
export const searchLinesRegex = (
    pattern: string | undefined,
    rawLog: Uint8Array,
    isCaseInsensitive: boolean
) => {
    const regex = buildSearchRegExp(pattern, isCaseInsensitive, true);

    if (!regex) {
        return [];
    }

    const resultLines: number[] = [];
    // Split the same way as convertBufferToLines so line numbers agree
    const lines = decode(rawLog).split(/\r\n|\r|\n/);

    lines.forEach((line, index) => {
        for (const match of line.matchAll(regex)) {
            // Skip empty matches such as "^" or "a*"
            if (match[0]) {
                resultLines.push(index + 1);
            }
        }
    });

    return resultLines;
};

/**
 * Searches for keywords within log lines, handling case sensitivity.
 *
 * @param {string | undefined} rawKeywords - The search term to look for.
 * @param {Uint8Array} rawLog - The log data to search within.
 * @param {boolean} isCaseInsensitive - Whether the search should be case-insensitive.
 * @param {boolean} isRegex - Treat the search term as a regular expression.
 * @returns {number[]} An array of line numbers where the keyword is found.
 */
export const searchLines = (
    rawKeywords: string | undefined,
    rawLog: Uint8Array,
    isCaseInsensitive: boolean,
    isRegex = false
) => {
    if (isRegex) {
        return searchLinesRegex(rawKeywords, rawLog, isCaseInsensitive);
    }

    let keywords = rawKeywords;
    let log = rawLog;
    let decodedLog = decode(log);

    // Handle case sensitivity
    if (isCaseInsensitive) {
        keywords = keywords?.toLowerCase();
        decodedLog = decodedLog.toLowerCase();
    }
    // Ensure the log ends with a newline for consistent line handling
    decodedLog = decodedLog.endsWith("\n") ? decodedLog : decodedLog + "\n";
    log = encode(decodedLog);

    // Perform the search
    const results = searchIndexes(keywords, log);
    const linesRanges = getLinesLengthRanges(log);
    const maxLineRangeIndex = linesRanges.length;
    const maxResultIndex = results.length;
    const resultLines = [];
    let lineRangeIndex = 0;
    let resultIndex = 0;
    let lineRange;
    let result;

    // Map search results to line numbers
    while (lineRangeIndex < maxLineRangeIndex) {
        lineRange = linesRanges[lineRangeIndex];

        while (resultIndex < maxResultIndex) {
            result = results[resultIndex];

            if (result <= lineRange) {
                // The search result is within the current line
                resultLines.push(lineRangeIndex + 1);
                resultIndex += 1;
            } else {
                // Move to the next line
                break;
            }
        }

        lineRangeIndex += 1;
    }

    return resultLines;
};
