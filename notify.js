const Notify = imports.gi.Notify;

Notify.init ("Hello world");

let hello = Notify.Notification.new ("Hello world",
                               "This is an example notification.",
                               "dialog-information");
hello.show();
