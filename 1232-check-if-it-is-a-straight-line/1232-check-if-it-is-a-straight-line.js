/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let a = coordinates[1][0] - coordinates[0][0];
    let b = coordinates[1][1] - coordinates[0][1];
    return coordinates.every(point => b * (point[0] - coordinates[0][0]) - a * (point[1] - coordinates[0][1]) === 0)    
};
