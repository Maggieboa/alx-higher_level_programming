#!/usr/bin/node
const Rectangle = require('./5-square.js');
class Square extends Rectangle {
  charPrint (c) {
    if (c === undefined) {
      for (let x = 0; x < this.height; x++) {
        let y = 0;
        let xy = '';
        while (y < this.width) {
          xy += 'X';
          y++;
        }
        console.log(xy);
      }
    } else {
      for (let i = 0; i < this.height; i++) {
        let j = 0;
        let ij = '';
        while (j < this.width) {
          ij += c;
          j++;
        }
        console.log(ij);
      }
    }
  }
}
module.exports = Square;
