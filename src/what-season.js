const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


 function getSeason(date) {
  if(typeof(date) == 'undefined'){
    return 'Unable to determine the time of year!'
  } 
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
   let months = ['winter','spring','summer','autumn'];
   let result = date.getMonth();
  if(result == 0 || result == 1 || result == 11) {
   return months[0];
   }else if(result == 2 || result == 3 || result == 4) {
   return months[1];
   }else if (result == 5 || result == 6 || result == 7) {
   return months[2]
   } else {
   return months[3]
   }
}
module.exports = {
  getSeason
};
