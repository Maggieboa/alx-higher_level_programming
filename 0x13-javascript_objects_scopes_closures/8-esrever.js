#!/usr/bin/node
exports.esrever = function rvs (list) {
  let len = list.length;
  let count = 0;

  while (count < len) {
    const temp = list[len - 1];
    list[len] = list[count];
    list[count] = temp;
    len--;
    count++;
  }
  return list;
};
