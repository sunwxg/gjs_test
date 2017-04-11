const Lang = imports.lang;

function callerName() {
    return callerName.caller.caller.name;
}

const Lightbox = new Lang.Class({
    Name: 'Lightbox',

    _init : function() {
        //for (let i in this) {
            //print(i + ' : ' + this[i]);
        //}
    },

    t : function() {
        print(callerName());
    }
});

let l = new Lightbox();

//l.t();

print(l.constructor.__name__);

for (let i in l._construct) {
    print(i);
}
