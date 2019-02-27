const Gdk = imports.gi.Gdk;
const Gtk = imports.gi.Gtk;

function callBack() {
    print("clipboard changed: ", clip.wait_for_text());
}

//let display = Gdk.Display.get_default();
let display = Gdk.Display.open(':0');
//print("display is ", display);
let clip = Gtk.Clipboard.get_default(display);
//let clip = Gtk.Clipboard.get(Gdk.EventType.SELECTION_NOTIFY);
let checkClipboardId = clip.connect("owner-change", callBack);
print("owner is ", clip.get_owner());

//let clip = new Gdk.Clipboard();

//let clip = Gdk.Display.get_clipboard(display);
//
//for (let i in Gdk.EventType)
    //print("event is ", i);

//let w = new Gtk.Window();
//let clip = w.get_clipboard(Gdk.EventType.SELECTION_NOTIFY);

Gtk.main();
