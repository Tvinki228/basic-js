const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
    if(arr.length <= 2) {
      return Math.max(...arr);
    }
    let result = [];
      
      let highNumber =  Math.max(...arr);
      let delNumIndex = arr.lastIndexOf(highNumber.toString())
      arr.forEach((item,index) => {
      if(index !== delNumIndex -1) {
      result.push(+item)
    }
    });
    let test = result.join('');
    return +test;
    }

module.exports = {
  deleteDigit
};
