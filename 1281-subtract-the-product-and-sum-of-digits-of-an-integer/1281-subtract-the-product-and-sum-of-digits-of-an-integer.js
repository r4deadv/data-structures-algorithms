/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr =n.toString().split('');
    let numArr = arr.map(e => Number(e))
    let product = numArr.reduce((a,c) => a * c, 1)
    let sum = numArr.reduce((a, c) => a + c)
    return product - sum;
};