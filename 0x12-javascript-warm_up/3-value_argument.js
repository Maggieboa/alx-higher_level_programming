#!/usr/bin/node
const argv = process.argv[2];

if (typeof process.argv[2] === 'undefined') {
  console.log('No argument');
} else {
  console.log(argv);
}
