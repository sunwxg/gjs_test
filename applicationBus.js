#!/usr/bin/gjs

const ByteArray = imports.byteArray;
const Gtk = imports.gi.Gtk;
const {Gio, GjsPrivate, GLib} = imports.gi;

var TestIface = '<node> \
<interface name="org.gnome.Shell.Test"> \
<method name="words"> \
    <arg type="s" direction="in"/> \
    <arg type="s" direction="out"/> \
</method> \
<method name="close"/> \
<signal name="wordChanged"> \
    <arg type="s"/> \
</signal> \
<property name="getGreet" type="s" access="read" /> \
<property name="setGreet" type="s" access="write" /> \
</interface> \
</node>';

class Test {
    constructor() {
        this.greet = 'hello';

        this.application = new Gtk.Application();
        this.application.connect('activate', this._onActivate.bind(this));
        this.application.connect('startup', this._onStartup.bind(this));

        this._impl = Gio.DBusExportedObject.wrapJSObject(TestIface, this);
        this._impl.export(Gio.DBus.session, '/org/gnome/Shell/Test');
        //print("constructor: ", this._impl.get_object_path(), "  ", this._impl.get_info().name);
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

        this.entry = new Gtk.Entry();
        this.entry.connect('changed', this.textChanged.bind(this));
        this.window.add(this.entry);
    }

    textChanged() {
        this._impl.emit_signal('wordChanged', new GLib.Variant('(s)', [this.entry.get_text()]));
    }

    words(words) {
        return this.greet + " " + words;
    }

    close() {
        print("Quit from DBus method close");
        app.application.quit();
    }

    get getGreet() {
        return this.greet;
    }

    set setGreet(value) {
        print("greet is changed to ", value);
        this.greet = value;
    }
}

let app = new Test();
app.application.run(ARGV);

