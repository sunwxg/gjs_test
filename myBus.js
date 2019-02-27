const ByteArray = imports.byteArray;
const Gtk = imports.gi.Gtk;
const {Gio, GjsPrivate, GLib} = imports.gi;

var TestIface = '<node> \
<interface name="org.gnome.Shell.Test"> \
<method name="translateWords"> \
    <arg type="s" direction="in"/> \
    <arg type="s" direction="out"/> \
</method> \
</interface> \
</node>';

class Test {
    constructor() {
        this.application = new Gtk.Application();
        this.application.connect('activate', this._onActivate.bind(this));
        this.application.connect('startup', this._onStartup.bind(this));

        this._impl = Gio.DBusExportedObject.wrapJSObject(TestIface, this);
        this._impl.export(Gio.DBus.session, '/org/gnome/Shell/Test');
        print("constructor: ", this._impl.get_object_path(), "  ", this._impl.get_info().name);
        Gio.DBus.session.own_name('org.gnome.Shell.Test',
            Gio.BusNameOwnerFlags.REPLACE,
            null, null);
    }

    _onActivate() {
        this.window.show_all();
    }

    _onStartup() {
        this.window = new Gtk.ApplicationWindow({ application: this.application,
                                                   window_position: Gtk.WindowPosition.CENTER,
                                                   border_width: 1 });
    }

    translateWords(words) {
        return "hello " + words;
    }
}

let app = new Test();
app.application.run(ARGV);

