const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let address = email.split('');
  let num;
    address.forEach((item,index)=> {
    if(item == '@') {
      num = index;
    }
    })
    return address.join('').slice(num + 1);
  }

module.exports = {
  getEmailDomain
};
