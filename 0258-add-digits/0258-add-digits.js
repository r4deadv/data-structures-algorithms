/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
    console.log(sum)
    return sum < 10 ? sum : addDigits(sum)
};