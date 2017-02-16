const GLib = imports.gi.GLib;

GLib.log_default_handler("Gjs", 4, "hello world", null);
window.log("hello world--window.log");

window.logError(new Error(), "hello error");

window.print("hello print");

for ( let i in window ) {
    print(i + " typeof: " + typeof(window[i]));
}

for (let i in window[GIRepositoryGType]) {
    print(i);
    //print(i + " typeof: " + typeof(window.GIRepositoryGType[i]));
}

