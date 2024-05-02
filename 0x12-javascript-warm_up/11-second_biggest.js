#!/usr/bin/node
const args = process.argv.slice(2);
const x = args.length - 2;
if (args.length > 1) {
  args.sort();
  console.log(args[x]);
} else if (args.length < 1) {
  console.log('0');
}
