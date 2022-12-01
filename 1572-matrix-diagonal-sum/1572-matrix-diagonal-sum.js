/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let l = mat.length;
    const center = Math.floor(l / 2);
    for(let i = 0; i < l; i++) {
        sum += mat[i][i];
        sum += mat[i][l - 1 - i];
    }
    return l % 2 ? sum - mat[center][center] : sum;
};