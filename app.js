"use strict";
/*

TYPES IN TYPESCRIPT

- Typescript obviously has all your usual types. AND THEN SOME!

*/
// String
var myName = "Fellini";
// myName = 27; => ERROR
// Just remember with arrays that if you want an array that holds any type you have to declare it as follows:
var arrayOfAny = ["fellini", 24, true];
// TUPLES
// These are mixed arrays of many types, but you can customize its structure by declaring what types are where and how many items.
var tupleArray = ["Fellini", 44, true];
// ENUMS
// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["green"] = 100] = "green";
    Color[Color["red"] = 101] = "red"; // => 101
})(Color || (Color = {}));
var myColor = Color.blue;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// FUNCTIONS
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// the void type allows to not have to return anything specific.
function sayHello() {
    console.log('ciao!');
}
// ARGUMENT TYPES
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max')); // => This will return NaN
function add(a, b) {
    return a + b;
}
console.log(add(1, 1));
// FUNCTION TYPES
var myMultiply;
// OBJECT TYPE DEFINITION
var userData = {
    name: "Max",
    age: 27
};
// COMPLEX OBJECTS
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data.map(function (data) { return data * 2; });
    }
};
// UNION TYPES
// It can only be a number or string.
var myRealAge;
// TYPE CHECKING
var finalValue = "A String";
if (typeof finalValue === "number") {
    console.log("Final value is a a number");
}
// THE NEVER TYPE
// This type is used in functions that should never return.
function neverReturns() {
    throw new Error('An error');
}
// NULLABLE TYPES
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
