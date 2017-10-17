const GLib = imports.gi.GLib;

print(GLib.file_test("/usr/share/xsessions/default.desktop", GLib.FileTest.IS_SYMLINK));
print(GLib.file_read_link("/usr/share/xsessions/default.desktop"));
