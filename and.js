function com() {
    return false;
}

function com2() {
    print('hello');
    return true;
}

if (com() && com2()) {
    print(' world');
}
