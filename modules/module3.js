"use strict";
// This is the conventional way of declaring variables in TS.
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 44;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Fellini", "fell");
console.log(person.username);
// THIS IS SHORTER SYNTAX FOR DECLARING CLASS METHODS AND VARIABLES.
var Car = /** @class */ (function () {
    function Car(make, model, designer) {
        if (designer === void 0) { designer = 'pininfarina'; }
        this.make = make;
        this.model = model;
        this.designer = designer;
    }
    Car.prototype.printModel = function () {
        return this.model;
    };
    Car.prototype.setDesigner = function (designer) {
        this.model = designer;
        return designer;
    };
    return Car;
}());
var myCar = new Car('Ferrari', 'F40');
console.log(myCar.printModel());
console.log(myCar);
