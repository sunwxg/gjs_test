
function sum(number) {
    if (number === 1) {
        print((new Error()).stack);
        return 1;
    }

    return sum(number-1) + number;
}

print(sum(20));
