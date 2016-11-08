const Gtk = imports.gi.Gtk;
const App = imports.app;

Gtk.init(null, null);

let win = new Gtk.Window({ type: Gtk.WindowType.TOPLEVEL  });
win.set_border_width(10);

function onDestroy(widget) {
    Gtk.main_quit();
}
win.connect('destroy', onDestroy);

let model = new App.Model({ name: 'Lucas'  });
model.connect("name-changed", function() {
    print('Name changed!');

});
let button = new Gtk.Button({ label: "Hello World"  });
button.connect("clicked", function() {
    model.setName('Rocha');

});
win.add(button);
button.show();
win.show();
Gtk.main();
