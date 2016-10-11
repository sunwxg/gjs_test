#!/usr/bin/env gjs-console

print("hello world!");

var book = {};

print(book);
print(book.isbn);

book.isbn = "xxxx-1234-1234";
book.title = "A somewhat interesting book"

print(book);
print(book.isbn);
print(book.title);

function Car(color) {
        this.color = color;
        this.show = function() {
            print(this.color);
        }
};

let car = new Car("red");
Car.prototype.change = function(color) {
    this.color = color;
}

print(car.color);
car.show();
car.change("green");
car.show();

for(let key in Car.prototype) {
    print(key + ":" + Car.prototype[key]);
}
