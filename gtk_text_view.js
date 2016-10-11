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
//win.set_border_width(10);
win.connect('destroy', destroyEvent);

let textview = new Gtk.TextView();
textview.set_border_width(10);

let entry = new Gtk.Entry();

let button = new Gtk.Button();
button.set_border_width(10);
button.set_label("text");

let swin = new Gtk.ScrolledWindow();
swin.set_border_width(10);
swin.add(textview);

let hbox = new Gtk.HBox();
hbox.set_border_width(10);
hbox.add(entry);
hbox.add(button);

let vbox = new Gtk.VBox();
vbox.add(swin);
vbox.add(hbox);

win.add(vbox);
win.show_all();

Gtk.main();
