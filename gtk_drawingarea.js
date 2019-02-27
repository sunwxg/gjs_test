#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const GdkPixbuf = imports.gi.GdkPixbuf;
const Clutter = imports.gi.Clutter;
const Cairo = imports.cairo;

function destroyEvent() {
    log("destroy event");
    Gtk.main_quit();
}

Gtk.init(null);

let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
});
win.set_title("Hello World");
win.set_size_request(400, 200);
win.connect('destroy', destroyEvent);

let drawArea = new Gtk.DrawingArea();
drawArea.connect('draw', (widget, cr) => {
    let width = widget.get_allocated_width();
    let height = widget.get_allocated_height();

    let pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_size('/home/sun/Pictures/BingWallpaper-2018-08-13.jpg', width, height);
    Gdk.cairo_set_source_pixbuf(cr, pixbuf, 0, 0);

    cr.paint();
});

let vbox = new Gtk.VBox();
vbox.add(drawArea);

win.add(vbox);
win.show_all();

Gtk.main();
