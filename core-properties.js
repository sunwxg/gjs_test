#!/usr/bin/env gjs-console

var GLib = imports.gi.GLib;
var GObject = imports.gi.GObject;
const Lang = imports.lang;

const Main = new Lang.Class({
	Name: "Main",

    properties: [
	{
		name: 'counter',
		type: GObject.TYPE_INT,
		default_value: 0,
		minimum_value: 0,
		maximum_value: 1024,
		flags: (GObject.ParamFlags.CONSTRUCT
			| GObject.ParamFlags.READABLE
			| GObject.ParamFlags.WRITABLE),
	}],

	_init: function() {
	this.print_counter = function() {
		print(this.counter++);
		return true;
	}

	this.monitor_counter = function(obj, gobject, data) {
		print("Counter value has changed to " + obj.counter);
	}

	GLib.timeout_add(0, 1000, this.print_counter);
	//this.signal.connect("notify::counter", this.monitor_counter);
	}
});

var main = new Main();

var loop = new GLib.MainLoop(null, true);
loop.run();
