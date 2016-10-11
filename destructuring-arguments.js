#!/usr/bin/gjs

function getSentence({ subject, verb, object }) {
    return subject + verb + object;
}
const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

print(getSentence(o));

let a = function ([ subject, verb, object ]) {
    return subject + verb + object;
}

const arr = [ "I", "love", "JavaScript" ];
print(a(arr));

function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

print(addPrefix("con", "verse", "vex")); // ["converse", "convex"]

