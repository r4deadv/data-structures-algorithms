/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
    return s.join('') === s.reverse().join('') ? true : false;
};