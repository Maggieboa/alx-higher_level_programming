#!/usr/bin/python3
for i in range(0, 10):
    if i < 10:
        for x in range(0, 10):
            if i == 9 and x == 9:
                print("{}{}\n".format(i, x), end="")
            else:
                print("{}{}".format(i, x), end=",")
