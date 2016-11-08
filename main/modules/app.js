const Signals = imports.signals;
function Model(args) {
    this._init(args);

}
Model.prototype = {
    _init: function(args) {
        this._name = args.name;

    },
    setName: function(name) {
        this._name = name;
        this.emit('name-changed');

    }

};
Signals.addSignalMethods(Model.prototype);
