const Gio = imports.gi.Gio;

const DBusIface = '<node> \
<interface name="org.freedesktop.DBus"> \
<method name="GetNameOwner"> \
    <arg type="s" direction="in"/> \
    <arg type="s" direction="out"/> \
</method> \
</interface> \
</node>';

const DBusProxy = Gio.DBusProxy.makeProxyWrapper(DBusIface);
let dbusProxy = new DBusProxy(Gio.DBus.session,
    'org.freedesktop.DBus',
    '/org/freedesktop/DBus');

for (let k in dbusProxy) {
    print("dbusProxy: ", k);
}

try {
    print(dbusProxy.GetNameOwnerSync('org.freedesktop.DBus'));
} catch (e) {
    print("error: ", e);
}

try {
    print(dbusProxy.GetNameOwnerSync('org.gnome.Dicts'));
} catch (e) {
    print("error: ", e);
}
