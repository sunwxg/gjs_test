//object based inheritace

let person = {
    name: "Nicholas",
    sayName: function() {
        print(this.name);
    }
};


let myPerson = Object.create(person);
myPerson.sayName();  // pops up "Nicholas"

let anotherPerson = Object.create(person, { name: {value:"sun"} });
anotherPerson.sayName();

//type based inheritance

function Person(name) {
    this.name = name;
}

function Author(name, age) {
    Person.call(this, name);
    this.age = age;
}

// inherit constructor
Author.prototype = new Person();

let author = new Author("sun", 10);
for (let i in author) {
    print(i); //print out name
}
print(author.name); //print out sun
print(author.age);  //print out 10
