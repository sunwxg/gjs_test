#!/usr/bin/gjs-console --include-path=.

var BookModule = imports.book
var book = new BookModule.Book("1234", "A good title");

book.printTitle();
book.printISBN();
