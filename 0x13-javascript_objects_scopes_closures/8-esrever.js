#!/usr/bin/node
exports.esrever = function rvs (list) {
  let len = list.length - 1;
  let count = 0;

  while (count < len) {
    const temp = list[len];
    list[len] = list[count];
    list[count] = temp;
    len--;
    count++;
  }
  return list;
};
