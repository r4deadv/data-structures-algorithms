/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = title.toLowerCase().split(' ');
    return words.map(word => word.length > 2 ? word.charAt(0).toUpperCase().concat(word.substring(1)) : word
    ).join(' ')
};