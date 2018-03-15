const Cogl = imports.gi.Cogl = 2.0;
const Clutter = imports.gi.Clutter;

const Gio = imports.gi.Gio;
const Lang = imports.lang;

const MyClutterActor = new Lang.Class({
    Name: 'MyClutterActor',
    Extends: Clutter.Actor,

    vfunc_get_preferred_width: function(actor, forHeight) {
        return [100, 100];
    },

    vfunc_get_preferred_height: function(actor, forWidth) {
        return [100, 100];
    },

    vfunc_paint: function(actor) {
        let alloc = this.get_allocation_box();
        Cogl.set_source_color4ub(255, 0, 0, 255);
        Cogl.rectangle(alloc.x1, alloc.y1, alloc.x2, alloc.y2);
    }
});

const MyClutterEffect = new Lang.Class({
    Name: 'MyClutterEffect',
    Extends: Clutter.DeformEffect,

    vfunc_deform_vertex: function(effect, width, height, vertex) {
        vertex.x += Math.random() * 20 - 10;
        vertex.y += Math.random() * 20 - 10;
    }
});

let actor = new MyClutterActor();
let stage = new Clutter.Stage();
actor.animatev(Clutter.AnimationMode.EASE_IN_OUT_CUBIC, 2000, ['x', 'y'], [200, 200]);
actor.add_effect(new MyClutterEffect());
stage.add_actor(actor);
stage.show_all();

Clutter.main();
