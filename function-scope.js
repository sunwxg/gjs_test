#!/usr/bin/gjs-console

const f = (function() {
    let count = 0;
    return function() {
        return 'I have been called ' + ++count + ' time(s).';
    }
})();
print(f()); // "I have been called 1 time(s)."
print(f()); // "I have been called 2 time(s)."
print(f()); // "I have been called 3 time(s)."
print(f()); // "I have been called 4 time(s)."

var x = 3;
if(x === 3) {
    let x = 2;
    print('(in function)x: ' + x);
}
print('(out function)x: ' + x);
