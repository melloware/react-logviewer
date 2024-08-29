import { decode, encode } from "./encoding";
import { getLinesLengthRanges } from "./utils";

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
 * Searches for keywords within log lines, handling case sensitivity.
 *
 * @param {string | undefined} rawKeywords - The search term to look for.
 * @param {Uint8Array} rawLog - The log data to search within.
 * @param {boolean} isCaseInsensitive - Whether the search should be case-insensitive.
 * @returns {number[]} An array of line numbers where the keyword is found.
 */
export const searchLines = (
    rawKeywords: string | undefined,
    rawLog: Uint8Array,
    isCaseInsensitive: boolean
) => {
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
