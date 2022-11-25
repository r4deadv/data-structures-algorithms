/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.find(i => nums.indexOf(i) === nums.lastIndexOf(i))
};