#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const System = imports.system;
const GLib = imports.gi.GLib;

class Application {
    constructor() {
        this.application = new Gtk.Application();
        this.application.connect('activate', this._onActivate.bind(this));
        this.application.connect('startup', this._onStartup.bind(this));
    }

    _onActivate() {
        this.window.show_all();
    }

    _onStartup() {
        this.window = new Gtk.ApplicationWindow({ application: this.application,
                                                title: 'note book',
                                                window_position: Gtk.WindowPosition.CENTER,
                                                border_width: 1 });

        this.window.set_size_request(900, null);
        let box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL});

        let hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
        let button1 = new Gtk.RadioButton({ });
        let entry = new Gtk.Entry({ margin_left: 10 });
        hbox.pack_start(button1, false, false, 0);
        hbox.add(entry);
        box.add(hbox);

        hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
        let button2 = new Gtk.RadioButton({ group: button1, margin_top: 10 });
        entry = new Gtk.Entry();
        hbox.pack_start(button2, false, false, 0);
        hbox.add(entry);
        box.add(hbox);

        hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
        let button3 = new Gtk.RadioButton({ group: button1, margin_top: 10 });
        entry = new Gtk.Entry();
        hbox.pack_start(button3, false, false, 0);
        hbox.add(entry);
        box.add(hbox);

        this.window.add(box);
    }
}

let app = new Application();
app.application.run(ARGV);
