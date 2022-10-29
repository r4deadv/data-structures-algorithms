/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2).padStart(32, 0).split('').reverse().join('').padStart(32, 0)
    return parseInt(str, 2)
};