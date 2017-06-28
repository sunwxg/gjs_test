let m = new Map();

m.set("name", 1);
m.set(1, "2");

print(m.get("name"));

let keys = m.keys();
print(keys.next());
for (let i in keys) {
    print(i);
}

print(keys);
for (let i in keys) {
    print(i);
}

let keysA =[ ...m.keys() ];
print(keysA);
