/*

TYPES IN TYPESCRIPT

- Typescript obviously has all your usual types. AND THEN SOME!

*/

// String
let myName = "Fellini";
// myName = 27; => ERROR


// Just remember with arrays that if you want an array that holds any type you have to declare it as follows:

const arrayOfAny: any[] = ["fellini", 24, true];

// TUPLES
// These are mixed arrays of many types, but you can customize its structure by declaring what types are where and how many items.
const tupleArray: [string, number, boolean] = ["Fellini", 44, true];

// ENUMS
// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

enum Color {
    blue, // => will equal to 0
    green = 100,
    red // => 101
}

let myColor = Color.blue;
console.log(myColor);

let car: any = "BMW";
console.log(car);

car = { brand: "BMW", series: 3 };
console.log(car);
