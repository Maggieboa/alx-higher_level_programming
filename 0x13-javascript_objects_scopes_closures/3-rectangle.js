#!/usr/bin/node
let x = 0;
let y = 0;
let xy = '';
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (; x < this.width; x++) {
      while (y < this.height) {
        xy += 'X';
        y++;
      }
      console.log(xy);
    }
  }
}
module.exports = Rectangle;
