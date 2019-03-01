const Gtk = imports.gi.Gtk;

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
                                                   show_menubar: false,
                                                   can_focus: false,
                                               });
        this.headerBar = new Gtk.HeaderBar({ show_close_button: false, });
        this.headerBar.title = 'test';

        let button = new Gtk.Button({});
        button.set_relief(Gtk.ReliefStyle.NONE);
        button.connect('clicked', () => { this.application.quit(); });

        let image = Gtk.Image.new_from_file('push-pin.png');
        button.set_image(image);

        this.headerBar.pack_end(button);
        this.window.set_titlebar(this.headerBar);
    }
}

let app = new Test();
app.application.run(ARGV);
