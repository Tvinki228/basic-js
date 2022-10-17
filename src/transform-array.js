const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
  let result = [...arr];
  let finalRes = [];
  result.forEach((item,index) => {
  if(item == '--double-prev') {
  result[index] = result[index - 1];
  } else if (item == '--double-next') {
  result[index] = result[index + 1];
  } else if (item == '--discard-next') {
  result[index] = null,
  result[index + 1] = null;
  } else if ( item == '--discard-prev') {
  result[index] = null,
  result[index - 1] = null;
  }
})
result.forEach(item => {
if(item != null || item != undefined) {
finalRes.push(item);
}
})
return finalRes
}

module.exports = {
  transform
};
