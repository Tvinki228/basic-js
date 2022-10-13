const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight( arr ) {
  let res = [];
  let x = [];
  arr.forEach((item,index) => {
  	if(item != -1) {
    res.push(item) 
    } else {
    x.push(index)
    }
  })
  let resultSort = res.sort( (a, b) => a - b );
  	x.forEach(item => {
  	resultSort.splice(item, 0, -1);
  })
  return resultSort
}

module.exports = {
  sortByHeight
};
