#!/usr/bin/env gjs-console

var Book = function(isbn, title) {
    this.isbn = isbn;
    this.title = title;
};

Book.prototype = {
    printTitle: function(){
        print("Title is " + this.title);
    },
    printISBN: function() {
        print("ISBN is " + this.isbn);
    }
};
var book = new Book("1234", "A good title");

book.printTitle();
book.printISBN();

//runtime prototype modifcation.
book.__proto__ = {
    author: "Joe Random",
    printAuthor: function() {
        print("Author is " + this.author);
    }
};

book.printAuthor();

var anotherBook = new Book("4567", "A more better title");

anotherBook.printTitle();
anotherBook.printISBN();
//anotherBook.printAuthor(); // this is invalid

//new prototype
Book.prototype = {
    printTitle: function(){
        print("New Title is " + this.title);
    }
};

anotherBook.printTitle();

let newBoot = new Book("xxxx", "A New proto title");
newBoot.printTitle();
