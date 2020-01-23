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

        let window = new Gtk.Window();
        let widget = new Gtk.AppChooserWidget();
        widget.set_show_all(true);
        window.add(widget);

        widget.connect('application_selected', (a, b) => {
            window.hide()

            let name = b.get_filename().split('/');
            let id = name[name.length - 1];
            this.updateButton(id);
        });

        this.button = new Gtk.Button();
        this.button.connect('clicked', () => {
            window.show_all();
            this.sensitive = false;
        });
        this.window.add(this.button);

        this.updateButton('firefox.desktop');

        this.window.set_size_request(200,-1);
    }

    updateButton(id) {
        let apps = Gio.AppInfo.get_all();
        let app;
        for (let i in apps) {
            if (apps[i].get_id() == id) {
                app = apps[i];
                break;
            }
        }
        let image = new Gtk.Image({ margin_left: 10, margin_right: 10 });
        let icon = app.get_icon();
        if (!icon)
            icon = new Gio.ThemedIcon({ name: "application-x-executable" });
        image.set_from_gicon(icon, Gtk.IconSize.BUTTON);
        this.button.set_image(image);
        this.button.set_always_show_image(true);
        this.button.set_label(app.get_display_name());
    }
}

let app = new Test();
app.application.run(ARGV);
