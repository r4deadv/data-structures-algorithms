/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n.toString(2)
    let result = 0;
    console.log(n)
    for(let i = 0; i < n.length; i++) {
       if(n[i] === n[i + 1]) {
           result ++;
       }
    }
    return result > 0 ? false : true;
};