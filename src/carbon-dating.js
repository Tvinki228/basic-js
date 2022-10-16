const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	let log = 0.693;
	let x = log / HALF_LIFE_PERIOD;
	let y = MODERN_ACTIVITY / sampleActivity;
	if( isNaN(sampleActivity) || typeof(sampleActivity) !== 'string' || sampleActivity.length == 0 || sampleActivity == ' ' || sampleActivity <= 0  || sampleActivity > MODERN_ACTIVITY) {
  	return false;
  } else {
 	return Math.ceil(Math.log(y) / (x));
}}

module.exports = {
  dateSample
};
