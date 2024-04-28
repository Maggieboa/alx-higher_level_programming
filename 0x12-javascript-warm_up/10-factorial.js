#!/usr/bin/node
const b = Number(process.argv[2]);
let i = 1;
let x = 1;
const a = 0;
function fact (a) {
  if (a > 0) {
    while (i < a) {
      i++;
      x = x * i;
    }
    console.log(x);
  }
}
if (b > 0) {
  fact(b);
} else if (a === 0) {
  console.log('1');
} else if (isNaN(a)) {
  console.log('1');
}
