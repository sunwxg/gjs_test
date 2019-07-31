#!/usr/bin/gjs

const Mainloop = imports.mainloop;
const Gio = imports.gi.Gio;

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
        this._impl = Gio.DBusExportedObject.wrapJSObject(TestIface, this);

        this._impl.export(Gio.DBus.session, '/org/gnome/Shell/Test');

        Gio.DBus.session.own_name('org.gnome.Shell.Test',
                                  Gio.BusNameOwnerFlags.REPLACE,
                                  null, null);
    }

    words(words) {
        return this.greet + " " + words;
    }

    close() {
        print("Quit from DBus method close");
        Mainloop.quit();
    }

    get getGreet() {
        return this.greet;
    }

    set setGreet(value) {
        print("greet is changed to ", value);
        this.greet = value;
    }
}

let test = new Test();

Mainloop.run();
