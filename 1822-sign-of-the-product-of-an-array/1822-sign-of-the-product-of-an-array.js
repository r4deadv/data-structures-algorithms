/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = nums.reduce((a, c) => a * c, 1)
    return product > 0 ? 1 : product < 0 ? -1 : 0
};