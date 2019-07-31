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

        this.notebook = new Gtk.Notebook();
        this.window.add(this.notebook);

        let scroll_window = new Gtk.ScrolledWindow({});
        let label = new Gtk.Label();
        label.set_text('page 1');
        scroll_window.add(label);

        label =new Gtk.Label();
        label.set_text('web');
        this.notebook.append_page(scroll_window, label);

        //this.notebook.show_tabs = false;
    }
}

let app = new Application();
app.application.run(ARGV);
