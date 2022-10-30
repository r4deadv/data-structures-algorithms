/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let arr = nums.sort((a,b) => b - a)
    let perimeter = 0;
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1] + arr[ i + 2]) {
            perimeter = Math.max(perimeter, arr[i] + arr[i + 1] + arr[ i + 2]) 
        }
    }
        return perimeter;
};