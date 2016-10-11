#!/usr/bin/env gjs-console

var GLib = imports.gi.GLib;
var GObject = imports.gi.GObject;
const Lang = imports.lang;
const Signals = imports.signals;

const Main = new Lang.Class({
    Name: 'Main',

    //signals: [{
        //name: "alert",
        //parameters: [GObject.TYPE_INT]
    //}],

    _init: function() {
        global.settings.connect('alert', this.alert);
        var counter = 0;
        var that = this;
        this.printCounter = function() {
            print(counter++);
            if (counter > 9) {
                that.emit('alert', counter);
            }
            return true;
        };
        GLib.timeout_add(0, 1000, this.printCounter);
    },

    alert: function(counter) {
        print("Counter is " + counter + ", let's stop here");
        loop.quit();
    }
});
Signals.addSignalMethods(Main.prototype);

var main = new Main();

var loop = new GLib.MainLoop(null, true);
loop.run();
