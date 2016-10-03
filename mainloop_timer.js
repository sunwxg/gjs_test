const Lang = imports.lang;
const GLib = imports.gi.GLib;
const Mainloop = imports.mainloop;

let sec = 0;

Mainloop.timeout_add_seconds(1, Lang.bind(this,
    function() {
        print("sec = " + this.sec);
        this.sec++;
        if (this.sec > 5) {
            Mainloop.quit();
        }

        return GLib.SOURCE_CONTINUE;
    }));

for (let i in Mainloop) {
    print(i);
}

Mainloop.run();
