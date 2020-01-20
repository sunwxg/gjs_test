#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

class Test {
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
                                                   window_position: Gtk.WindowPosition.CENTER,
                                                   can_focus: false,
                                               });

        let button = new Gtk.AppChooserButton();

        let apps = Gio.AppInfo.get_all();
        apps.forEach( app => {
            let icon = app.get_icon();
            if (!icon)
                icon = new Gio.ThemedIcon({ name: "application-x-executable" });

            button.append_custom_item(app.get_id(), app.get_name(), icon);
        });

        button.set_active_custom_item(apps[0].get_id());

        button.connect('custom_item_activated', (item, id) => {
            print("wxg: selected=", item, id);
        });

        this.window.add(button);
        this.window.set_size_request(200,-1);
    }
}

let app = new Test();
app.application.run(ARGV);
