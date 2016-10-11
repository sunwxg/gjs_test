#!/usr/bin/gjs-console

function f(a, b = "default", c = 3) {
    return "Number " + a + b + c;
}
print(f(5, 6, 7));//"5 - 6 - 7"
print(f(5, 6));   //"5 - 6 - 3"
print(f(5));      //"5 - default - 3"
print(f());       //"undefined - default - 3"








