/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = title.toLowerCase().split(' ');
    return words.map(word => {
        if(word.length > 2) {
             return word.charAt(0).toUpperCase().concat(word.substring(1))
        } else {
            return word
        }
    }).join(' ')
};