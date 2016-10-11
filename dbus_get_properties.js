const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const DBus = imports.gi.DBus;

let interface_name = [GLib.Variant.new_string('org.freedesktop.hostname1'),
                  GLib.Variant.new_string('Hostname')];

let call = {
    bus_name: 'org.freedesktop.hostname1',
    object_path: '/org/freedesktop/hostname1',
    interface_name: 'org.freedesktop.DBus.Properties',
    method_name: 'Get',
    parameters: GLib.Variant.new_tuple(interface_name, 2),
    reply_type: null,
    flags: Gio.DBusCallFlags.NONE,
    timeout_msec: -1,
    cancellable: null,
};

let dbusConnection;
try {
    dbusConnection = Gio.bus_get_sync(DBus.BusType.SYSTEM, null);
} catch (e) {}

let message;
try {
    message = dbusConnection.call_sync(
        call.bus_name,
        call.object_path,
        call.interface_name,
        call.method_name,
        call.parameters,
        call.reply_type,
        call.flags,
        call.timeout_msec,
        call.cancellable
    );
} catch (e) {}

let hostName;
try {
    hostName = message.get_child_value(0).get_variant().get_string()[0];
} catch (e) {}

print(hostName);
