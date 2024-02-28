#!/usr/bin/python3
# string length
def uppercase(str):
    count = 0
    d = 0
    for c in str:
        count += 1
        if count >= 1:
            if ord(c) > 96 and ord(c) < 123:
                c = chr(ord(c) - 32)
            print("{}".format(c), end="")
    print("")
