/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = accounts.map(c => c.reduce((a,c) => a + c))
    return Math.max(...wealth)
};