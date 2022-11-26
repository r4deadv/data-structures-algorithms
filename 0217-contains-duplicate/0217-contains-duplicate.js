/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     return nums.filter(i => nums.indexOf(i) !== nums.lastIndexOf(i));
};