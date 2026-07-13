/**
 * Similarity search over an array of strings.
 *
 * Ranks every candidate string against a query word using a similarity
 * score in [0, 1] (1 = identical), derived from Levenshtein edit distance,
 * with a small boost for direct substring/prefix matches so obvious
 * matches float to the top even when edit distance alone wouldn't rank
 * them first (e.g. "cat" vs "category").
 */

/**
 * Classic Levenshtein edit distance (single-row DP for O(n) memory).
 * @param {string} a
 * @param {string} b
 * @returns {number} number of single-character edits to turn a into b
 */
function levenshtein(a:string, b:string) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    let prevRow = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prevRow[j] = j;

    for (let i = 1; i <= a.length; i++) {
        const currRow = new Array(b.length + 1);
        currRow[0] = i;

        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            currRow[j] = Math.min(
                prevRow[j] + 1,      // deletion
                currRow[j - 1] + 1,  // insertion
                prevRow[j - 1] + cost // substitution
            );
        }
        prevRow = currRow;
    }

    return prevRow[b.length];
}

/**
 * Normalized similarity in [0, 1] based on edit distance relative to the
 * longer string's length. 1 = identical strings, 0 = completely different.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function editSimilarity(a:string, b:string) {
    const maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 1; // both empty strings
    return 1 - levenshtein(a, b) / maxLen;
}

/**
 * @typedef {Object} SimilarityMatch
 * @property {string} value    the original (un-normalized) candidate string
 * @property {number} score    similarity score in [0, 1], higher is better
 */

/**
 * @typedef {Object} SimilaritySearchOptions
 * @property {boolean} [caseSensitive=false]  compare case-sensitively
 * @property {number}  [threshold=0]          drop matches scoring below this
 * @property {number}  [limit]                cap the number of results returned
 * @property {number}  [substringBoost=0.15]  extra score added when the
 *                                             candidate contains the query
 *                                             as a substring (capped at 1)
 */

/**
 * Search `items` for the strings most similar to `query`.
 *
 * @param {string[]} items                 candidates to search
 * @param {string} query                   the search term
 * @param {SimilaritySearchOptions} [options]
 * @returns {SimilarityMatch[]} results sorted by descending score
 */
function similaritySearch(items:any[], query:string, itKeys:string[], options:any = {}) {
    const {
        caseSensitive = false,
        threshold = 0,
        limit,
        substringBoost = 0.15,
    } = options;

    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array of strings');
    }
    if (typeof query !== 'string') {
        throw new TypeError('query must be a string');
    }

    const normalize = (s:string) => (caseSensitive ? s : s.toLowerCase());
    const normalizedQuery = normalize(query);

    let validkeys: any = {};
    itKeys.map(k => validkeys[k] = true);

    const results = items
        // .filter((item) => typeof item === 'string')
        .map((item:any) => {
            
            const score = Object.keys(item).filter(k => (validkeys[k])).map(k => (

                item[k].split(/[\ \,\|\&\(\)\-]/).map((word:string): any => {
                    const normalizedItem = normalize(word);

                    let score = editSimilarity(normalizedItem, normalizedQuery);
                    if (normalizedQuery.length > 0 && normalizedItem.includes(normalizedQuery)) {
                        score = Math.min(1, score + substringBoost);
                    }
                    console.log('score', normalizedItem, score);
                    return score;
                }).reduce( (a:any, b:any) => (a+b) )
                
            )).reduce( (a, b) => (a+b) );
            
            return { value: item, score };
        })
        .filter((match) => match.score >= threshold)
        .sort((a, b) => b.score - a.score);

        console.log('results', results);

    
    return typeof limit === 'number' ? results.slice(0, limit) : results;
}

export {
    similaritySearch,
    editSimilarity,
    levenshtein,
};

/* ------------------------------------------------------------------------
   Example usage
   ------------------------------------------------------------------------

const { similaritySearch } = require('./similaritySearch');

const items = ['apple', 'application', 'apply', 'banana', 'grape', 'app'];

console.log(similaritySearch(items, 'app', { limit: 3 }));
// => [
//   { value: 'app', score: 1 },
//   { value: 'apply', score: ~0.75 },
//   { value: 'apple', score: ~0.75 }
// ]

------------------------------------------------------------------------- */