const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1,s2) {
  if( s1.length == 0 || s2.length == 0) {
    return 0
  }
	let first = s1.split('');
  let second = s2.split('');
   let arr= [];
   
   first.forEach(item => {
   	if (second.includes(item)) {
    arr.push(item),
    second.splice(second.indexOf(item), 1)
    }
   })
   return arr.length != 0?arr.length:0
   }

module.exports = {
  getCommonCharacterCount
};
