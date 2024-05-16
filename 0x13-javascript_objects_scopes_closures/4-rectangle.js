#!/usr/bin/node
let x = 0;
let y = 0;
let xy = '';
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && typeof w === 'number' && typeof h === 'number') {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (; x < this.height; x++) {
      while (y < this.width) {
        xy += 'X';
        y++;
      }
      console.log(xy);
    }
  }

  rotate () {
    let tempw = 0;
    tempw = this.width;
    this.width = this.height;
    this.height = tempw;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
