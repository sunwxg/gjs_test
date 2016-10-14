const Mainloop = imports.mainloop;

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

for (let i=1; i<=5; i++) {
    (function (j) {
        Mainloop.timeout_add_seconds(j, function timer(){
            print( j );
        });
    })(i);
}

Mainloop.run();
