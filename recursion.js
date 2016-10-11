#!/usr/bin/gjs-console

const g = function f(stop) {
    if(stop) {
        print('f stopped')
        return;
    };

    print('loop');

    f(true);
};

print("g(false)");
g(false);

print("\ng(true)");
g(true);
