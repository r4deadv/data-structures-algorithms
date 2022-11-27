/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let distance = 0;
    let smallestDistance = Infinity;
    let result = -1;
    points.forEach((point, index) => {
        if(point[0] === x || point[1] === y) {
            distance = Math.abs(point[0] - x) + Math.abs(point[1] - y)
            if (distance < smallestDistance) {
                smallestDistance = distance;
                result = index;
            }
       }
   })
    return result
};