#!/usr/bin/gjs

const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;
const Signals = imports.signals;
const System = imports.system;

const HelloGNOME = new Lang.Class ({
    Name: 'HelloGNOME',

    // Create the application itself
    _init: function () {
        this.application = new Gtk.Application ();

        // Connect 'activate' and 'startup' signals to the callback functions
        this.application.connect('activate', Lang.bind(this, this._onActivate));
        this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    // Callback function for 'activate' signal presents windows when active
    _onActivate: function () {
        this._window.present ();
    },

    // Callback function for 'startup' signal builds the UI
    _onStartup: function () {
        this._buildUI ();
    },

    foo: function () {
        let a = [];
        for (let i = 0; i < 80000; i++) {
            a[i] = "hello world!";
        }
        //return a;
    },

    _click: function () {
        //this.foo();
        let a = [];
        for (let i = 0; i < 80000; i++) {
            a[i] = "hello world!";
        }
        let t = {'a':a};

        print('click');
        //main.emit('test', this.foo());
        main.emit('test', t);
    },

    _clickGC: function () {
        print("gc click");
        System.gc();
    },

    // Build the application's UI
    _buildUI: function () {

        // Create the application window
        this._window = new Gtk.ApplicationWindow  ({
            application: this.application,
            title: "Welcome to GNOME",
            default_height: 200,
            default_width: 400,
            window_position: Gtk.WindowPosition.CENTER });

        this._vbox = new Gtk.VBox();

        this._button = new Gtk.Button({ label: "hello" });
        this._button.connect("clicked", Lang.bind(this, this._click));
        this._vbox.add(this._button);

        this._gc = new Gtk.Button({ label: "gc" });
        this._gc.connect("clicked", Lang.bind(this, this._clickGC));
        this._vbox.add(this._gc);

        this._connect = new Gtk.Button({ label: "connect signal" });
        this._connect.connect("clicked", Lang.bind(main, main._signal));
        this._vbox.add(this._connect);

        this._window.add(this._vbox);
        // Show the window and all child widgets
        this._window.show_all();
    },

});
Signals.addSignalMethods(HelloGNOME.prototype);

const Main= new Lang.Class ({
    Name: 'Main',

    // Create the application itself
    _init: function () {
    },

    _signal: function () {
        this.connect('test', Lang.bind(this, this._test));
        print("main connect signal");
    },

    _test: function (main, para) {
        print(para.a[0]);
    },
});
Signals.addSignalMethods(Main.prototype);

let main = new Main ();

// Run the application
let app = new HelloGNOME ();
app.application.run (ARGV);
