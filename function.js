let f = function () {};
print(f.hasOwnProperty('prototype'));

for( let key in f ) {
    print('key:' + key + ' -> ' + f[key]);
}
