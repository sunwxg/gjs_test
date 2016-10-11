#!/usr/bin/gjs-console

let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        return blockVar;
    };
}

print(globalFunc());

let f;  // undefined function
{
    let o = { note: 'Safe' };
    f = function() {
        return o;
    };
}

let oRef = f();
oRef.note = "Not so safe after all!";

print(oRef.note);
