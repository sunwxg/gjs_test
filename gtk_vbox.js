#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const Lang = imports.lang;

function destroyEvent() {
    log("destroy event");
    this.destroy();
}

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(200, 100);
win.connect('destroy', Gtk.main_quit);

let label_num = 10;

let label = [];
for(let i = 0; i <= label_num; i++) {
    label[i] = new Gtk.Button();
    label[i].set_label("Hello World " + i);
    //label[i].connect("clicked", Lang.bind(label[i], label[i].destroy));
    label[i].connect("clicked", Lang.bind(label[i], destroyEvent));
}

let vbox = new Gtk.VBox();
for(let i = 0; i <= label_num; i++) {
    vbox.add(label[i]);
}

win.add(vbox);
win.show_all();

Gtk.main();
