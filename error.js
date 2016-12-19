function test() {
    throw {
        name: 'MyError',
        message: 'My error'
    };
}

function p1() {
    p2();
}

function p2() {
    let t = new Error();
    print(typeof t);
    for (let i in Object.getPrototypeOf(Error())) {
        print(i);
    }

    let e = (new Error()).stack;
    print(typeof e);
    print(e.length);
    print(e);
    //test();
}

p1();

//print('typeof: ' + typeof e);

