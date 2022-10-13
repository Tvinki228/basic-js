const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str ) {
  let result = [];
  let arr = str.split('') 
    let obj = {};
    arr.map(item => {
    obj[item] = 0
    })
    arr.map (item => {
    if(obj.hasOwnProperty(item)) {
    obj[item]++
    }
    })
    for (let key in obj) {
    result.push(obj[key],key)
  }
  return result.join('')
  }

module.exports = {
  encodeLine
};
