#!/usr/bin/node
const argv = process.argv[2];
if (argv > 0) {
  let len = 0;
  while (len < argv) {
    len++;
    console.log('C is fun');
  }
} else if (argv === undefined) {
  console.log('Missing number of occurrences');
}
