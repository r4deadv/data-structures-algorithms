/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let pos = 0;
    for(let i =0; i< nums.length; i++) {
        if(nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
        if(nums[i] != 0) {
            nums[pos++] = nums[i]
        }
    }
    for(let i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};