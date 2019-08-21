const System = imports.system;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

let dataDir = GLib.get_current_dir();
let path = GLib.build_filenamev([dataDir, 'history.json']);
let file = Gio.File.new_for_path(path);

if (!file.query_exists(null))
    file.create(Gio.FileCreateFlags.NONE, null);

let [ok, contents] = file.load_contents(null);

let map = [];
if (contents.length != 0) {
    map = JSON.parse(contents);
}


if (ARGV.length == 0) {
    print(map[0].word);
} else {
    let newWord = {};
    newWord.word = ARGV[0];
    map.push(newWord);
    let [success, tag] = file.replace_contents(JSON.stringify(map), null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null);
    print(success, tag);
}

// zip file
path = GLib.build_filenamev([dataDir, 'history.json.gz']);
file = Gio.File.new_for_path(path);

if (!file.query_exists(null))
    file.create(Gio.FileCreateFlags.NONE, null);

[ok, contents] = file.load_contents(null);

map = [];
if (contents.length != 0) {
    let decompressor = Gio.ZlibDecompressor.new(Gio.ZlibCompressorFormat.GZIP);
    let input = Gio.MemoryOutputStream.new_resizable();
    let inputStream = Gio.ConverterOutputStream.new(input, decompressor);
    inputStream.write_all(contents, null);
    inputStream.close(null);

    map = JSON.parse(input.steal_as_bytes().get_data());
}

if (ARGV.length == 0) {
    print(map[0].word);
} else {
    let newWord = {};
    newWord.word = ARGV[0];
    map.push(newWord);

    let compressor = Gio.ZlibCompressor.new(Gio.ZlibCompressorFormat.GZIP, 9);
    let out = Gio.MemoryOutputStream.new_resizable();
    let outStream = Gio.ConverterOutputStream.new(out, compressor);
    outStream.write_all(JSON.stringify(map), null);
    outStream.close(null);

    let [success, tag] = file.replace_contents(out.steal_as_bytes().get_data(), null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null);
    print(success, tag);
}
