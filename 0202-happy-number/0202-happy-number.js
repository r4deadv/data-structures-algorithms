/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n.toString().split('').reduce((acc, curr) => acc + (curr * curr), 0);
    return sum === 1 ? true : sum <= 4 ? false : isHappy(sum)
};