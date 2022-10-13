const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let test = [];
  let result = 0; 

  if (matrix[0].length === 1) {
    matrix.forEach(item => {
    test.push(+item);
    })
  }
    let i = 0;

    while (i < test.length) {
      result = result + test[i]
      if(test[i] == 0) {
        break;
    }
    i++
    };
  
    let columnCount = matrix[0].length;
    
    if (matrix[0].length != 1) {
    for(let i = 0; i < columnCount; i++) {
      for(let j = 0; j < matrix.length; j++) {
        if(matrix[j][i] == 0 && i+1 < matrix.length) {
          matrix[i+1][j] = 0;
        }
        result += matrix[j][i];
      }
    }
    }
    return result;
  }

module.exports = {
  getMatrixElementsSum
};
