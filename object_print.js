let items = {};

items['a'] = 'atom';
items['b'] = 'boy';

print(items);

for (let i in items)
    print(i, "=", items[i]);

print("object.values=", Object.values(items));
print("object.values.length=", Object.values(items).length);
print("object.keys=", Object.keys(items));
print("object.keys.length=", Object.keys(items).length);
