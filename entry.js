const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
//const ST = imports.St;

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

function onActivate() {
    log('activate event');
}

Gtk.init(null, null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(200, 100);
win.connect('destroy', destroyEvent);

let entry = new Gtk.Entry();
entry.connect('activate', onActivate);

let hbox = new Gtk.HBox();
hbox.add(entry);

//_passwordEntry = new St.Entry({ style_class: 'prompt-dialog-password-entry',
                                             //text: "",
                                             //can_focus: true});

win.add(hbox);
win.show_all();

Gtk.main();
