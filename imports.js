//let keys = Object.keys(Lang);
//for (let k in Lang) {
    //print(k + " ->\t\t " + typeof(Lang[k]));
//}

function print_object(obj) {
    print("-----------------------");
    if (typeof(obj.__moduleName__) !== "undefined") {
        print("object: " + obj.__moduleName__);
    } else {
        print("object: " + obj.name);
    }
    print("-----------------------");

    let properties = Object.getOwnPropertyNames(obj);

    for (let p in properties) {
        let k = properties[p];
        switch(typeof(obj[k])) {
            case "string":
            case "object":
                print(typeof(obj[k]) + "\t:" + properties[p] + " -> " + obj[k]);
                break;
            default:
                print(typeof(obj[k]) + "\t:" + properties[p]);
        }
    }
}

const Lang = imports.lang;
print_object(Lang);

const JsUnit = imports.jsUnit;
print_object(JsUnit);

const Gettext = imports.gettext;
print_object(Gettext);

print_object(Object);
print_object(Object.prototype);

print_object(this);

print_object(String);

const Mainloop = imports.mainloop;
print_object(Mainloop);

const Gtk = imports.gi.Gtk;
print_object(Gtk);

//const GtkWidget = imports.gi.Gtk.GtkWidget;
print_object(Gtk.Widget);
print_object(Gtk.Label);

//print_object(imports);

const Gdk = imports.gi.Gdk;
print_object(Gdk);

const Widget = imports.gi.Gtk.Widget;
print_object(Widget);
