print(imports.searchPath);
imports.searchPath.push('/usr/lib64/gnome-shell/');
imports.searchPath.push('resource:///org/gnome/shell');
print(imports.searchPath);

let paths = '';
for (let key in imports.searchPath) {
paths = paths + imports.searchPath[key] + "\n";
}
print(paths);
//imports.searchPath.forEach(function(item, key, list) {
    //print("Key: ", key);
    //print("Item: ", item);
    //print("List: ", list);
    //print("\n============\n");
//});

const ST = imports.gi.St = '1.0';
