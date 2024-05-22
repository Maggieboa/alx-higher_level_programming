#!/usr/bin/node
let count = 0;
exports.logMe = function logPrint (item) {
  if (item !== 'undefined') {
    console.log(count++ + ': ' + item);
  }
};
