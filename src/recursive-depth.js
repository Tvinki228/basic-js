const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
  let result =  1;

  for (let i = 0; i < arr.length; i++) {
  let counter = 1;
    if (Array.isArray(arr[i]) === true) {
      counter = counter + this.calculateDepth(arr[i]);
    } if  (counter >= result) {
          result = counter;
        }
  }
  return result;
  }
}

module.exports = {
  DepthCalculator
};
