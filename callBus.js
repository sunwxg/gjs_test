#!/usr/bin/gjs

const {Gio, GjsPrivate, GLib} = imports.gi;

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
const TestProxy = Gio.DBusProxy.makeProxyWrapper(TestIface);

function callback(result, error) {
    print("Async method call result is ",result);
}

function wordChanged(proxy, senderName, value) {
    print(value);
}

let proxy = new TestProxy(Gio.DBus.session,
                          "org.gnome.Shell.Test",
                          "/org/gnome/Shell/Test");

proxy.wordsRemote("remote", callback);

print("Sync method call result is ", proxy.wordsSync("sync"));

print("Read property 'getGreet': ", proxy.getGreet);

proxy.setGreet = 'Great';

print("After set progerty 'setGreet': ", proxy.getGreet);
print("Sync method call result is ", proxy.wordsSync("sync"));

proxy.connectSignal('wordChanged', this.wordChanged.bind(this));

let loop = new GLib.MainLoop(null, true);
loop.run();

