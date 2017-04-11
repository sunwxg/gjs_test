#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const DISABLE_RESTART_KEY = 'disable-restart-buttons';

let loginScreenSettings = null;

let settingsSchemaSource = Gio.SettingsSchemaSource.get_default();
let settingsSchema = settingsSchemaSource.lookup('org.gnome.login-screen', true);
if (settingsSchema) {
    loginScreenSettings = Gio.Settings.new_full(settingsSchema, null, null);
}
//print(settingsSchema);

if (loginScreenSettings) {
    print(loginScreenSettings.get_boolean(DISABLE_RESTART_KEY));

    let keys = loginScreenSettings.list_keys();
    for (let i in keys) {
        print('keys : ' + keys[i]);
    }

    print('schema : ' + loginScreenSettings.schema);
    print('schema_id : ' + loginScreenSettings.schema_id);
    print('path : ' + loginScreenSettings.path);
}


