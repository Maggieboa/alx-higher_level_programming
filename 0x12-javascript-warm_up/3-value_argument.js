#!/usr/bin/node
const argv = process.argv.slice(2);

if (typeof process.argv[2] === 'undefined') {
  console.log('No argument');
} else {
  argv.forEach((val, index) => {
    console.log(val);
  });
}
