#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

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
                                                title: 'move window',
                                                border_width: 1 });

        this.window.set_size_request(100, 50);

        let button = new Gtk.Button();
        button.connect('clicked', this.moveWindow.bind(this));

        this.window.add(button);
    }

    moveWindow() {
        print("clicked, ", this.window.get_position());
        let [x, y] = this.window.get_position();
        this.window.move(x + 10, y + 10);
    }
}

let app = new Application();
app.application.run(ARGV);
