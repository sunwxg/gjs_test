#!/usr/bin/gjs

const Gio = imports.gi.Gio;
//const Meta = imports.gi.Meta;

const CLASSIC_OVERRIDES_SCHEMA = 'org.gnome.shell.extensions.classic-overrides';

function initClassicOverridesSchema() {
    let settings = new Gio.Settings({ schema_id: CLASSIC_OVERRIDES_SCHEMA});
    let keys = settings.settings_schema.list_keys();
    print("keys=", keys);

    for (let key in keys) {
        print(keys[key]);
        //Meta.prefs_override_preference_schema(key, settings.settings-schema.get_id());
    }
}

initClassicOverridesSchema();

