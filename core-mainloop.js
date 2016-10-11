#!/usr/bin/env gjs-console

var GLib = imports.gi.GLib;
var GObject = imports.gi.GObject;
const Lang = imports.lang;

const Main = new Lang.Class({
    Name: "Main",

    _init: function() {

        var counter = 0;

        this.printCounter = function() {
            print(counter++);
            return true;
        };

        GLib.timeout_add(0, 1000, this.printCounter);
    }
});

var main = new Main();
var loop = new GLib.MainLoop(null, true);
loop.run();
