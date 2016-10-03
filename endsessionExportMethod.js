const Gio = imports.gi.gio;

const EndSessionDialogIface = '<node> \
<interface name="org.gnome.SessionManager.EndSessionDialog"> \
<method name="Open"> \
    <arg type="u" direction="in" /> \
    <arg type="u" direction="in" /> \
    <arg type="u" direction="in" /> \
    <arg type="ao" direction="in" /> \
</method> \
<method name="Close" /> \
<signal name="ConfirmedLogout" /> \
<signal name="ConfirmedReboot" /> \
<signal name="ConfirmedShutdown" /> \
<signal name="Canceled" /> \
<signal name="Closed" /> \
</interface> \
</node>';

let dbusimpl = Gio.DBusExportedObject.wrapJSObject(EndSessionDialogIface, this);

for (let i in dbusimpl) {
    print(i);
}
