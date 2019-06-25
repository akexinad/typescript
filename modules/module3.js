"use strict";
// This is the conventional way of declaring variables in TS.
var Person = /** @class */ (function () {
    function Person(name, username, type, age) {
        this.name = name;
        this.username = username;
        this.name = name;
        this.type = type;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Fellini", "fell");
console.log(person.username);
// THIS IS SHORTER SYNTAX FOR DECLARING CLASS METHODS AND VARIABLES.
var Car = /** @class */ (function () {
    function Car(make, designer, model) {
        this.make = make;
        this.designer = designer;
        this.model = model;
    }
    return Car;
}());
var myCar = new Car('Ferrari', 'Materazzi', '288GTO');
console.log(myCar.model);
