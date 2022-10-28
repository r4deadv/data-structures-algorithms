/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const min = Math.min(...salary)
    const max = Math.max(...salary)
    const average = salary.reduce((a,c) => a + c, -max - min) / (salary.length -2)
    return average
};