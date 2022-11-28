/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let a = [], b = [];
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            a.push(s1[i]);
            b.push(s2[i])
        }
    }
    if (a.length === 0) {
        return true;
    }
    if(a.length === 2) {
        a = a.sort();
        b = b.sort();
        if(a[0] === b[0] && a[1] === b[1]) {
            return true;
        }
    }
    return false;
};