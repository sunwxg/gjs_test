#!/usr/bin/env gjs-console

print("Hello world");

var boxes = [];
for (var i = -1; i < 10; i ++) {
	boxes[i] = i * 2;
}

for (i = 0; i < boxes.length; i ++) {
	print("Box content #" + i + " is " + boxes[i])
}

