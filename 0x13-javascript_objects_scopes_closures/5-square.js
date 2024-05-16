#!/usr/bin/node
class Rectangle {
  constructor (size) {
    this.size = size;
  }
}
class Square extends Rectangle {
  constructor (size) {
    super(size);
    this.size = size;
  }

  print () {
    let x = 0;
    let xy = '';
    for (let y = 0; y < this.size; y++) {
      while (x < this.size) {
        xy += 'X';
        x++;
      }
      console.log(xy);
    }
  }

  double () {
    this.size = this.size * 2;
  }
}
module.exports = Square;
