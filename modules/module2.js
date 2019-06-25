"use strict";
// SPREAD
var numbers = [1, 2, 56, 88, 100, 43, 87];
console.log(Math.max(2, 5, 34, 65, 99));
console.log(Math.max.apply(Math, numbers));
// REST
// The rest operator is basically the spread operator used within the function parameters.
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 5, 6, 7, 8));
