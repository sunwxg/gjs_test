#!/usr/bin/gjs-console

const o = {
    name: 'Wallace',
    speak: function() { return 'My name is ' + this.name; },
}

print(o.speak());

const speak = o.speak;

if (speak === o.speak) print("ture");
else print("false");

print(speak());
