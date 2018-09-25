#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

function openFileChooser() {
    let fileChooser = new Gtk.FileChooserDialog({ title: "Select File",
                                                  action: Gtk.FileChooserAction.OPEN });
    //fileChooser.set_accept_label("Select");
    fileChooser.show();
}

Gtk.init(null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(200, 100);
//win.set_border_width(10);
win.connect('destroy', destroyEvent);

let button = new Gtk.Button();
button.set_border_width(10);
button.set_label("Choose File");

button.connect("clicked", openFileChooser);

let vbox = new Gtk.VBox();
vbox.add(button);

win.add(vbox);
win.show_all();

Gtk.main();
