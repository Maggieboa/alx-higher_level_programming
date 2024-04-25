#!/usr/bin/node
const argv = process.argv[2];
if (argv > 0) {
  let len = 0;
  let len1 = 0;
  for (len = 0; len < argv; len++) {
    for (len1 = 0; len1 < argv; len1++) {
      process.stdout.write('X');
    } console.log('');
  }
} else if (isNaN(argv)) {
  console.log('Missing size');
}
