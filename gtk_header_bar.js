const Gtk = imports.gi.Gtk;
const System = imports.system;
const GLib = imports.gi.GLib;

class Test {
    constructor() {
        this.application = new Gtk.Application();
        this.application.connect('activate', this._onActivate.bind(this));
        this.application.connect('startup', this._onStartup.bind(this));
    }

    _onActivate() {
        this.window.show_all();
        this.headerBar.visible = false;
    }

    _onStartup() {
        this.window = new Gtk.ApplicationWindow({ application: this.application,
                                                   window_position: Gtk.WindowPosition.CENTER,
                                                   show_menubar: false,
                                                   can_focus: false,
                                               });
        this.headerBar = new Gtk.HeaderBar({ show_close_button: true, });
        this.headerBar.title = 'test';

        let button = new Gtk.ToggleButton({});
        button.set_relief(Gtk.ReliefStyle.NONE);
        button.connect('toggled', (button) => { print("state is ", button.get_active()); });

        let image = Gtk.Image.new_from_file('push-pin.png');
        button.set_image(image);

        this.headerBar.pack_end(button);
        this.window.set_titlebar(this.headerBar);

        let box = new Gtk.Box();
        this.window.add(box);

        let entry = new Gtk.Entry();
        box.add(entry);

        button = new Gtk.CheckButton({});
        button.connect('toggled', (button) => { this.headerBar.visible = !(this.headerBar.visible); });
        box.add(button);
    }
}

let app = new Test();
app.application.run(ARGV);
