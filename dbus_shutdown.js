const Gio = imports.gi.Gio;

const SessionManagerIface = '<node> \
<interface name="org.gnome.SessionManager"> \
<method name="Logout"> \
    <arg type="u" direction="in" /> \
</method> \
<method name="Shutdown" /> \
<method name="Reboot" /> \
<method name="CanShutdown"> \
    <arg type="b" direction="out" /> \
</method> \
<method name="IsInhibited"> \
    <arg type="u" direction="in" /> \
    <arg type="b" direction="out" /> \
</method> \
<property name="SessionIsActive" type="b" access="read"/> \
<signal name="InhibitorAdded"> \
    <arg type="o" direction="out"/> \
</signal> \
<signal name="InhibitorRemoved"> \
    <arg type="o" direction="out"/> \
</signal> \
</interface> \
</node>';

var SessionManagerProxy = Gio.DBusProxy.makeProxyWrapper(SessionManagerIface);

let _session = new SessionManagerProxy(Gio.DBus.session, 'org.gnome.SessionManager', '/org/gnome/SessionManager');

for ( let i in _session ) {
    print(i + " : " + typeof _session[i]);
}

_session.ShutdownSync();
//_session.ShutdownRemonte();
