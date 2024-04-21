#!/usr/bin/node
const argv = process.argv[2];
const argv1 = process.argv[3];
if (argv === 'undefined') {
  console.log('undefined is ' + argv1);
} else if (argv1 === 'undefined') {
  console.log(argv + ' is undefined');
} else {
  console.log(argv + ' is ' + argv1);
}
