function foo() {
    print( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
foo.apply( obj ); // 2
// call and apply is same here


function foo2(something) {
    print( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
    return foo2.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
print( b ); // 5

function foo3(something) {
    print( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo3.bind( obj );

var b = bar( 3 ); // 2 3
print( b ); // 5
