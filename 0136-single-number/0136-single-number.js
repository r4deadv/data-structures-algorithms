/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter(i => nums.indexOf(i) === nums.lastIndexOf(i))
};