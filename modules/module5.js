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
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 25));
var oldPerson = {
    firstName: 'Fellini',
    age: 44,
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
