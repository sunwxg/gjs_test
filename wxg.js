//Lang.Class.prototype.wrapFunction = Wxg.newWrapFunction;
//

const Lang = imports.lang;

let className = '';
let oldWrapFunction = Lang.Class.prototype.wrapFunction;

let exclude = [];

function inExclude(name) {
    for (let i = 0; i < exclude.length; i++) {
        if (name === exclude[i]) {
            return true;
        }
    }
    return false;
}

let newWrapFunction = function(name, meth) {
    if (meth._origin) meth = meth._origin;

    function wrapper() {
        let prevCaller = this.__caller__;
        this.__caller__ = wrapper;
        if (!inExclude(name)) {
            print(className + ' : ' + name);
        }
        let result = meth.apply(this, arguments);
        this.__caller__ = prevCaller;
        return result;
    }

    wrapper._origin = meth;
    wrapper._name = name;
    wrapper._owner = this;

    return wrapper;
};

function callerName() {
    let c = callerName.caller.caller._ownner;
    for (let i in c) {
        print(i + ' : ' + typeof c[i]);
    }

    //print(callerName.caller.caller._owner());
    //return callerName.caller.caller._name;
}

function _callerName() {
    return _callerName.caller.caller.caller._name;
}

function info() {
    return className + ' : ' + _callerName();
}

function stack() {
    return (new Error()).stack;
}

