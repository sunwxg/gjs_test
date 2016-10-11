#!/usr/bin/gjs-console

let sum = function() {
    let i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

print(sum(1));
print(sum(1, 2, 4));

