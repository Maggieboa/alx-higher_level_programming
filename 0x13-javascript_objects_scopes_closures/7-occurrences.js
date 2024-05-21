#!/usr/bin/node
exports.nbOccurences = function occur (list, searchElement) {
  let len = 0;
  let count = 0;
  while (len < list.length) {
    if (list[len] === searchElement) {
      count++;
    }
    len++;
  }
  return count;
};
