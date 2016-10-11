#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Widget = imports.gi.Gtk.Widget;

function destroy() {
    log('cliked');
    return button1.destroy;
}

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});

win.set_title("Hello World");
win.connect('destroy', Gtk.main_quit);
win.set_size_request(200, 100);

let button1 = Gtk.Button.new_with_mnemonic("_Close");
button1.set_relief(0);

button1.connect('clicked', destroy);

win.add(button1);

win.show_all();

Gtk.main();
