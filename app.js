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
