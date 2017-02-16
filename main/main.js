const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
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

let ids = GObject.signal_list_ids(button);
print(ids);

//for (let i = 0; i < ids.length; i++) {
    //print(GObject.signal_query(ids[i]));
//}

win.add(button);

button.show();
win.show();
Gtk.main();
