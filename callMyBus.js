const {Gio, GjsPrivate, GLib} = imports.gi;

var TestIface = '<node> \
<interface name="org.gnome.Shell.Test"> \
<method name="translateWords"> \
    <arg type="s" direction="in"/> \
    <arg type="s" direction="out"/> \
</method> \
</interface> \
</node>';
const TestProxy = Gio.DBusProxy.makeProxyWrapper(TestIface);

let proxy = new TestProxy(Gio.DBus.session,
                          "org.gnome.Shell.Test",
                          "/org/gnome/Shell/Test");

function callback(result, error) {
    print("result is ",result);
    loop.quit();
}

let loop = new GLib.MainLoop(null, true);
proxy.translateWordsRemote("world", callback);
loop.run();

