const Gio = imports.gi.Gio;
const Lang = imports.lang;

const PkOfflineIface = '<node> \
<interface name="org.freedesktop.PackageKit.Offline"> \
    <property name="UpdatePrepared" type="b" access="read"/> \
    <property name="TriggerAction" type="s" access="read"/> \
    <method name="Trigger"> \
        <arg type="s" name="action" direction="in"/> \
    </method> \
    <method name="Cancel"/> \
</interface> \
</node>';

const PkOfflineProxy = Gio.DBusProxy.makeProxyWrapper(PkOfflineIface);

let _pkOfflineProxy = new PkOfflineProxy(Gio.DBus.system,
    'org.freedesktop.PackageKit',
    '/org/freedesktop/PackageKit',
    Lang.bind(this, function(proxy, error) {
        if (error)
            log(error.message);
    }));

for (let i in _pkOfflineProxy) {
    print(i + " : " + typeof _pkOfflineProxy[i]);
}

_pkOfflineProxy.TriggerRemote('power-off',
    function (result, error) {
        if (error)
            log(error.message);
    });
