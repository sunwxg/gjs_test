const Lang = imports.lang;
const Wxg = imports.wxg;

let oldWrapFunction = Lang.Class.prototype.wrapFunction;
//Wxg.className = 'Me';
//Wxg.exclude = ['t1', 't2'];
//Lang.Class.prototype.wrapFunction = Wxg.newWrapFunction;

const Me = new Lang.Class({
    Name: 'Me',

    _init: function() {
        Wxg.callerName();
    },

    t1: function() {
    },

    t2: function() {
    },

    t3: function() {
    },
});

print('------------------------------------------------------');
let o = new Me();
o.t1();
o.t2();
o.t3();

//for (let i in o.constructor) {
    //print(i + ': ' + typeof o[i]);
//}

print(o.__name__);

Lang.Class.prototype.wrapFunction = Wxg.oldWrapFunction;
Wxg.className = 'Other';
const Other = new Lang.Class({
    Name: 'Other',

    _init: function() {
        print('in other _init');
    },

    t1: function() {
        print(Wxg.info());
    },

    t2: function() {
        print(Wxg.stack());
    },

    t3: function() {
    },
});

print('------------------------------------------------------');
let p = new Other();
p.t1();
p.t2();
p.t3();

