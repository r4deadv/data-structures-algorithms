/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let i = 0;
    let res = '';
    while(i < s.length) {
        let n = s.charCodeAt(i)
        res += n >= 65 && n <= 90 ? String.fromCharCode(n + 32) : s.charAt(i);
        i ++;
    }
    return res;
};