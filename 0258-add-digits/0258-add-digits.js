/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num.toString().split('').map(n => Number(n)).reduce((acc, curr) => acc + curr, 0);
    console.log(sum)
    return sum < 10 ? sum : addDigits(sum)
};