#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

function deleteEvent() {
    //return true;
    log("delete event");
    return false;
}

function clickEvent() {
    log("press event");
    label.set_text("clicked");
}

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.connect('delete-event', deleteEvent);
win.connect('destroy', destroyEvent);
win.connect('key-press-event', clickEvent);

//win.set_border_width(9);
win.set_size_request(200, 100);

let label = new Gtk.Label();
label.set_label("Hello World");
label.set_selectable(true);

win.add(label);
win.grab_focus();

//win.set_resizable(false);
win.set_gravity(5);
win.show_all();

Gtk.main();
