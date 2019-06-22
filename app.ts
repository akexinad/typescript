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




// FUNCTIONS

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

// the void type allows to not have to return anything specific.

function sayHello(): void {
    console.log('ciao!');
}


// ARGUMENT TYPES

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max')); // => This will return NaN


function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 1));




// FUNCTION TYPES

let myMultiply: (val1: number, val2: number) => number;




// OBJECT TYPE DEFINITION

let userData: {
    name: string,
    age: number
} = {
    name: "Max",
    age: 27
};