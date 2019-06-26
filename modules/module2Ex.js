"use strict";
var double = function (value) { return value * 2; };
console.log(double(10));
// const greet = (name: string = 'Fellini') => {
//     console.log(`Hello ${ name }`);
// }
// greet();
// greet('Benigni');
var array = [-3, 33, 38, 44, 5];
console.log(Math.min.apply(Math, array));
var newArray = [55, 90];
newArray.push.apply(newArray, array);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = {
    firstName: 'Fellini',
    experience: 20
};
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
