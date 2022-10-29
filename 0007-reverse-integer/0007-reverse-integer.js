/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) {
        rev = -rev
    }
    if (rev <= -2147483648 || rev >= 2147483647 ){
        rev = 0;
    }
    return rev    
};