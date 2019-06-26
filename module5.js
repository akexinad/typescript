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
// greet({
//     firstName: "Max",
//     // age: 27
//     hobbies: 'sports'
// });
changeName(person);
person.greet('Lopez');
