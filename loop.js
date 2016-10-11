#!/usr/bin/gjs-console

let i = 10;

while(i > 0) {
    print("i=" + i);
    i--;
}

i = 1;
switch(i) {
    case 1:
        print("1");
    case 2:
        print("2");
        //break;
    case 3:
        print("3");
    case 4:
        print("4");
    default:
        print("default");
}

let obj = {
    k1: 1,
    k2: 2,
    k3: 3,
};

//for...in loop
for(let key in obj) {
    print(key + ":" + obj[key]);
}

let a = [1, 2, 3, 4];

//for...of loop
for(let t of a) {
    print(t);
}

{
    let d = 1;
    //var d = 1;
}
print(d);
