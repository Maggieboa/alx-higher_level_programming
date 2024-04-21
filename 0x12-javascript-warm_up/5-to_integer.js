#!/usr/bin/node
const argv = process.argv[2];
if (argv < 0 || argv > 0) {
  console.log('My number: ' + argv);
} else {
  console.log('Not a number');
}
