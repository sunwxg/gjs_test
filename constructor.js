#!/usr/bin/env gjs-console

var Book = function(isbn, title) {
	this.isbn = isbn;
	this.title = title;
}

var book = new Book("1234", "A good title");

print(book.isbn);
print(book.title);
