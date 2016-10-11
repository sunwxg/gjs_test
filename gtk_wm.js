#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
    //type: Gtk.WindowType.POPUP
});

win.set_title("Hello World");
win.connect('delete-event', Gtk.main_quit);
win.show_all();

Gtk.main();
