#!/usr/bin/gjs-console

var try_it = function ( ) {
    try {
        add("seven");
    } catch (e) {
       print(e.name + ': ' + e.message);
    }
}
try_it( );

let throw_err = function() {
    throw {
        name: 'MyError',
        message: 'My error'
    }
}

try_it = function() {
    try {
        throw_err();
    } catch (e) {
       print(e.name + ': ' + e.message);
    }
}
try_it( );
