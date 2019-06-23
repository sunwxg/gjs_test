#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Webkit = imports.gi.WebKit2;


class Application {

    constructor(word) {
        this.word = word ? word : 'welcome';
        this.application = new Gtk.Application();

        this.application.connect('activate', Lang.bind(this, this._onActivate));
        this.application.connect('startup', Lang.bind(this, this._onStartup));
    }

    _onActivate() {
        this.win.show_all();
    }

    _onStartup() {
        this.win = new Gtk.ApplicationWindow({ application: this.application,
                                                  title: 'translate-shell',
                                                  window_position: Gtk.WindowPosition.CENTER,
                                                  border_width: 1 });
        this.win.set_resizable(true);
        this.win.set_size_request(900, 800);

        this.text = new Gtk.Label({});
        this.text.set_xalign(0);
        this.text.set_yalign(0);

        try {
            //let [result, stdout, stderr, status] = GLib.spawn_command_line_sync("trans -t zh-CH -no-ansi file");
            let [result, stdout, stderr, status] = GLib.spawn_command_line_sync("trans -t zh-CH --show-languages n " + this.word);

            let text = this._escape_translation(Utf8ArrayToStr(stdout));
            //let text = Utf8ArrayToStr(stdout);

            this.text.set_markup(text);

        } catch (e) {
            this.text.set_text("Error: " + e.message);
        }

        let scroll_window = new Gtk.ScrolledWindow({});
        scroll_window.add(this.text);

        let vbox = new Gtk.VBox({orientation: Gtk.Orientation.VERTICAL});
        vbox.add(scroll_window);

        this.win.add(vbox);
    }

    _escape_translation(str) {
        if (!str) {
            return '';
        }

        let stuff = {
            "\x1B[1m": '<b>',
            "\x1B[22m": '</b>',
            "\x1B[4m": '<u>',
            "\x1B[24m": '</u>'
        };
        for (let hex in stuff) {
            str = this._replace_all(str, hex, stuff[hex]);
        }
        return str;
    }

    _replace_all(str, find, replace) {
        return (str || '').split(find).join(replace);
    }
};

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4)
        {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}

for (let i in ARGV)
    print("ARGV: ", ARGV[i]);
let app = new Application(ARGV.length ? ARGV[0] : null);
app.application.run(ARGV);
