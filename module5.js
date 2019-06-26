"use strict";
// INTERFACES
var person = {
    firstName: "Max",
    age: 27,
    hobbies: ['cooking', 'sports'],
    greet: function (lastName) {
        console.log("Hi my name is " + this.firstName + " " + lastName);
    }
};
function greet(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
// Strict checks only happen when you pass in an object literal.
// greet({
//     firstName: "Max",
//     // age: 27
//     hobbies: 'sports'
// });
changeName(person);
person.greet('Lopez');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi my name is " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Federico";
greet(myPerson);
myPerson.greet("Fellini");
