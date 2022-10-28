/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let  maxProfit = 0;
    let curProfit = 0;
    for(let i = 1; i < prices.length; i ++) {
        curProfit = Math.max(0, curProfit += prices[i] - prices[i - 1])
        console.log(curProfit)
        maxProfit = Math.max(maxProfit, curProfit)
    }
    return maxProfit;
};