/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        let row = new Set();
        for(let j = 0; j < n; j++){
            row.add(matrix[i][j])
        }
        if(row.size !== n) {
            return false;
        }
    }
      for(let i = 0; i < n; i++) {
        let col = new Set();
        for(let j = 0; j < n; j++){
            col.add(matrix[j][i])
        }
        if(col.size !== n) {
            return false;
        }
    }
    return true;
};