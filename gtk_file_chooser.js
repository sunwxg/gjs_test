#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

let entry;
let win;

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

function openFileChooser() {
    let fileChooser = new Gtk.FileChooserDialog({ title: "Select File" });

    fileChooser.set_transient_for(win);
    fileChooser.add_button("Cancel", Gtk.ResponseType.CANCEL);
    fileChooser.add_button("Open", Gtk.ResponseType.ACCEPT);

    switch(fileChooser.run()) {
        case Gtk.ResponseType.CANCEL:
            fileChooser.close();
            break;
        case Gtk.ResponseType.ACCEPT:
            let file = fileChooser.get_uris();
            if (file.length > 0)
                entry.set_text(file[0]);
            fileChooser.close();
            break;
        default:
    }

}

Gtk.init(null);

win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(200, 100);
//win.set_border_width(10);
win.connect('destroy', destroyEvent);

let vbox = new Gtk.VBox();
let button = new Gtk.Button();
entry = new Gtk.Entry({ margin: 10 });

button.set_border_width(10);
button.set_label("Choose File");
button.connect("clicked", openFileChooser);

vbox.add(button);
vbox.add(entry);

win.add(vbox);
win.show_all();

Gtk.main();
