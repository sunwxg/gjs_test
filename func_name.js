const Lang = imports.lang;
const Wxg = imports.wxg;

let oldWrapFunction = Lang.Class.prototype.wrapFunction;
Wxg.className = 'Me';
Lang.Class.prototype.wrapFunction = Wxg.newWrapFunction;

const Me = new Lang.Class({
    Name: 'Me',

    _init: function() {
        print('in _init');
    },

    t1: function() {
        print(Wxg.printInfo());
    },

    t2: function() {
        print(Wxg.printStack());
    },

    t3: function() {
    },
})

print('------------------------------------------------------');
let o = new Me();
o.t1();
o.t2();
o.t3();


Lang.Class.prototype.wrapFunction = Wxg.oldWrapFunction;
const Other = new Lang.Class({
    Name: 'Other',

    _init: function() {
        print('in other _init');
    },

    t1: function() {
    },

    t2: function() {
    },

    t3: function() {
    },
})

print('------------------------------------------------------');
let p = new Other();
p.t1();

