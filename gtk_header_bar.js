const Gtk = imports.gi.Gtk;

class Test {
    constructor() {
        this.application = new Gtk.Application();
        this.application.connect('activate', this._onActivate.bind(this));
        this.application.connect('startup', this._onStartup.bind(this));
    }

    _onActivate() {
        this.headerBar.show_all();
        this.window.show_all();
    }

    _onStartup() {
        this.window = new Gtk.ApplicationWindow({ application: this.application,
                                                   window_position: Gtk.WindowPosition.CENTER,
                                                   show_menubar: false,
                                                   can_focus: false,
                                               });
        this.headerBar = new Gtk.HeaderBar({
            show_close_button: true,
        });
        let menuButton = new Gtk.MenuButton({});
        this.headerBar.add(menuButton);

        this.headerBar.title = 'test';
        print("wxg: layout: ",this.headerBar.get_decoration_layout());

        //this.window.add(this.headerBar);
        this.window.set_titlebar(this.headerBar);
    }
}

let app = new Test();
app.application.run(ARGV);
