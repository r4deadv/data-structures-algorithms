/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let curDiff = 0;
    let maxDiff = 0;
    for (let i = 1; i < nums.length; i ++) {
        curDiff = Math.max(0, curDiff += nums[i] - nums[i -1])
        console.log(curDiff)
        maxDiff = Math.max(maxDiff, curDiff)
    }
    return maxDiff > 0 ? maxDiff : -1;
};