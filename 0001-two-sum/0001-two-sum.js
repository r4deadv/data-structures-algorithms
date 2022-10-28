/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(target - nums[i] === nums[j]) {
                result[0] = i;
                result[1] = j;
                return result
            }
        }
    }
    return result;
};