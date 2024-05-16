#!/usr/bin/nod
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && typeof w === 'number' && typeof h === 'number') {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      let y = 0;
      let xy = '';
      while (y < this.width) {
        xy += 'X';
        y++;
      }
      console.log(xy);
    }
  }

  rotate () {
    const tempw = this.width;
    this.width = this.height;
    this.height = tempw;
  }

  double () {
    const tempw = this.width * 2;
    const temph = this.height * 2;
    this.width = tempw;
    this.height = temph;
  }
}
module.exports = Rectangle;
