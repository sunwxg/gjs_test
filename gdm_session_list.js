#!/usr/bin/gjs

const Gdm = imports.gi.Gdm;


let ids = Gdm.get_session_ids();

for (let i = 0; i < ids.length; i++) {
    let [sessionName, description] = Gdm.get_session_name_and_description(ids[i]);

    let id = ids[i];
    print("id: ", id, "\t\t  session: ", sessionName);

}
