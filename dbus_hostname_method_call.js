const Gio = imports.gi.Gio;

const HostnameIface = '<node> \
<interface name="org.freedesktop.DBus.Properties"> \
    <method name="Get"> \
        <arg type="s" direction="in" /> \
        <arg type="s" direction="in" /> \
        <arg type="v" direction="out" /> \
    </method> \
</interface> \
</node>';

const HostnameProxy = Gio.DBusProxy.makeProxyWrapper(HostnameIface);

//function Hostname(initCallback, cancellable) {
    //return new HostnameProxy(Gio.DBus.system,
                             //'org.freedesktop.hostname1',
                             //'/org/freedesktop/hostname1',
                             //initCallback, cancellable);
//}


let hostname = HostnameProxy(Gio.DBus.system,
                             'org.freedesktop.hostname1',
                             '/org/freedesktop/hostname1',
                             null, null);

let name = hostname.GetSync('org.freedesktop.hostname1', 'Hostname');
print(name[0].get_string()[0]);

name = hostname.GetSync('org.freedesktop.hostname1', 'StaticHostname');
print(name[0].get_string()[0]);
