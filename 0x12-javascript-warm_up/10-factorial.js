#!/usr/bin/node
const a = Number(process.argv[2]);
let i = 1;
let x = 1;
if (a > 0) {
  while (i < a) {
    i++;
    x = x * i;
  }
  console.log(x);
} else if (a === 0) {
  console.log('0');
} else {
  console.log('1');
}
