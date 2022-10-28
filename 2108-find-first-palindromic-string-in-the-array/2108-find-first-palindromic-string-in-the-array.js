/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result = "";
    words.map(word => {
        if(word === word.split('').reverse().join('') && result === ""){
           return result = word;
        } 
    })
   return result;
};