#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;
const Webkit = imports.gi.WebKit2;

//const WEB_SITE = 'http://cn.bing.com/dict/lantern';
const WEB_SITE = 'https://www.bing.com/dict/search?q=welcome&mkt=zh-cn';

class Application {

    constructor() {
       this.application = new Gtk.Application();

       this.application.connect('activate', Lang.bind(this, this._onActivate));
       this.application.connect('startup', Lang.bind(this, this._onStartup));
    }

    _onActivate() {
        this.win.show_all();
    }

    _onStartup() {
        this.win = new Gtk.ApplicationWindow({ application: this.application,
                                                  title: 'flag',
                                                  window_position: Gtk.WindowPosition.CENTER,
                                                  border_width: 1 });
        this.win.set_resizable(true);
        this.win.set_size_request(900, 800);

        this.web_view = new Webkit.WebView();
        this.web_view.load_uri(WEB_SITE);

        let scroll_window = new Gtk.ScrolledWindow({});
        scroll_window.add(this.web_view);

        let vbox = new Gtk.VBox({orientation: Gtk.Orientation.VERTICAL});
        vbox.add(scroll_window);

        this.win.add(vbox);
    }
};

print("ARGV is ", ARGV);
for (let i in ARGV)
    print("ARGV: ", ARGV[i]);
let app = new Application();
app.application.run(ARGV);
