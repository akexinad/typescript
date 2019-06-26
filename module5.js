"use strict";
// INTERFACES
var person = {
    firstName: "Max",
    age: 27,
    hobbies: ['cooking', 'sports']
};
function greet(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
greet({
    firstName: "Max",
    // age: 27
    hobbies: 'sports'
});
changeName(person);
greet(person);
