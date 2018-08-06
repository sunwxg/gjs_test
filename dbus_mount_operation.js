const Gio = imports.gi.Gio;

const GnomeShellMountOpIface = '<node> \
<interface name="org.Gtk.MountOperationHandler"> \
<method name="AskPassword"> \
    <arg type="s" direction="in" name="object_id"/> \
    <arg type="s" direction="in" name="message"/> \
    <arg type="s" direction="in" name="icon_name"/> \
    <arg type="s" direction="in" name="default_user"/> \
    <arg type="s" direction="in" name="default_domain"/> \
    <arg type="u" direction="in" name="flags"/> \
    <arg type="u" direction="out" name="response"/> \
    <arg type="a{sv}" direction="out" name="response_details"/> \
</method> \
<method name="Close"/> \
</interface> \
</node>';

let MountOperationHandler = Gio.DBusProxy.makeProxyWrapper(GnomeShellMountOpIface);

function mountOperation(initCallback, cancellable) {
    return new MountOperationHandler(Gio.DBus.session, 'org.gtk.MountOperationHandler',
            '/org/gtk/MountOperationHandler', initCallback, cancellable);
}

let _mo = new mountOperation();

for (let i in _mo) {
    print(i);
}

print(_mo.AskPasswordSync("mount", "message", "icon_name", "suse", "default_domain", null));

_mo.CloseSync();


