//Lang.Class.prototype.wrapFunction = Wxg.newWrapFunction;
//

const Lang = imports.lang;

let className = '';
let oldWrapFunction = Lang.Class.prototype.wrapFunction;

let newWrapFunction = function(name, meth) {
    if (meth._origin) meth = meth._origin;

    function wrapper() {
        let prevCaller = this.__caller__;
        this.__caller__ = wrapper;
        print(className + ' : ' + name);
        let result = meth.apply(this, arguments);
        this.__caller__ = prevCaller;
        return result;
    }

    wrapper._origin = meth;
    wrapper._name = name;
    wrapper._owner = this;

    return wrapper;
}

function callerName() {
    return callerName.caller.caller._name;
}

function _callerName() {
    return _callerName.caller.caller.caller._name;
}

function printInfo() {
        return className + ' : ' + _callerName();
}

