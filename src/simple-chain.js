const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
   
  },
  addLink(value) {
   
  },
  removeLink(position) {
    throw new Error("You can't remove incorrect link!")
  },
  reverseChain() {
    
  },
  finishChain() {
   
  }
  
};

module.exports = {
  chainMaker
};
