/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let result = true;
    const d = sorted[1] - sorted[0]
    for(let i = 2; i < sorted.length; i++) { 
        if(sorted[i] - sorted[i - 1] !== d){
            result = false;
        } 
    }
    return result;
};