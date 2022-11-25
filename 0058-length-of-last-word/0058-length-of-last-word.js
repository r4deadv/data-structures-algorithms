/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const last = s.trim().split(' ').pop();
    return last.length;
};