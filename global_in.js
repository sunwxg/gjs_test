(function (a, b) {
    for (let i in this) {
        print(i);
    }

    print('--------------------');

    for (let i in arguments) {
        print('arguments[' + i + '] = ' + arguments[i]);
    }

})(10, 20, 30);
