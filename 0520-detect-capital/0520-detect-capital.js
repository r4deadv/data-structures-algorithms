/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word.toUpperCase() === word || word.toLowerCase() === word || ( 
        word.charAt() === word.charAt().toUpperCase() && 
        word.substring(1) === word.substring(1).toLowerCase()
    )
}; 