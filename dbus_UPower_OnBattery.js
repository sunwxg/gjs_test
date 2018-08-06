const Gio = imports.gi.Gio;

const UPowerIface = '<node> \
<interface name="org.freedesktop.UPower"> \
    <property name="OnBattery" type="b" access="read"/> \
</interface> \
</node>';

const UPowerProxy = Gio.DBusProxy.makeProxyWrapper(UPowerIface)

function sync() {
    print(powerProxy.OnBattery);
}

let powerProxy = new UPowerProxy(Gio.DBus.system,
                             'org.freedesktop.UPower',
                             '/org/freedesktop/UPower',
                             (proxy, error) => {
                                 if (error) {
                                     log(error.message);
                                     return;
                                 }
                                 powerProxy.connect('g-properties-changed', () => sync());
                                 sync();
                             });

print(powerProxy);
for ( let i in Object.getPrototypeOf(powerProxy) ) {
    print(i);
}

