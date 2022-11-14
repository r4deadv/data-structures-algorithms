/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    res = [];
    let start = 0 ;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[i + 1]) {
            if(i + 1 - start >= 3) {
                res.push([start, i])
            }
            start = i + 1;
        }
    }
    return res;
};
