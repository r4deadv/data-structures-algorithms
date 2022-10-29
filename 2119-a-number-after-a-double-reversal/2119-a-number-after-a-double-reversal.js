/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let rev = parseInt(num.toString().split('').reverse().join(''));
    let rev2 = parseInt(rev.toString().split('').reverse().join(''));
    return num === rev2
};