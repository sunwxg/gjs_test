#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(200, 100);
win.connect('destroy', destroyEvent);

let label = new Gtk.Label();
label.set_label("Hello\n\n\n\n\n\n\n\n\n\n\nWorld");

let swm = new Gtk.ScrolledWindow();
swm.add(label);

let vbox = new Gtk.VBox();
vbox.add(swm);

win.add(vbox);

win.show_all();

Gtk.main();
