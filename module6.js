"use strict";
// A SIMPLE GENERIC
function echo(data) {
    return data;
}
// console.log(echo("Max").length);
// console.log(echo(27).length); // => This just gives undefined
// console.log(echo({
//     name: "Max",
//     age: 27
// }).length);
// In the above example, since the type that is being returned is type of any, the compilation errors are not helpful.
// GENERICS help with giving better errors.
// This syntax tells TS that this is a generic function.
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max"));
// console.log(betterEcho<number>(27).length); // => This gives a more helpful error if you looke into the console and the IDE is also aware.
console.log(betterEcho({
    name: "Max",
    age: 27
}));
// BUILT-IN GENERICS
var testResults = [45, 65];
// NOTE that this is the same as => const testResults: number[] = [45, 65];
testResults.push(33);
// testResults.push('yes'); // => error
// ARRAYS
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(['fellini', 'benigni', 'pasolini']);
// The equivalent generic type of the above function would be as follows.
// So, what the expression below says is that:
// echo is a function where the input is of type whoa, and it returns something which is of type Whoa.
var echo2 = betterEcho;
console.log(echo2("Something"));
// console.log(echo2<string>(22)); // => Argument of type '22' is not assignable to parameter of type 'string'.ts(2345)
// GENERIC CLASSES
// Non Generic Version
/*
class SimpleMath {

    constructor(
        public baseValue: number,
        public multiplyValue: number
    ) { }
    
    calculate() {
        return console.log(this.baseValue * this.multiplyValue);
    }
}

const MyMath = new SimpleMath(10, 20);
MyMath.calculate();

*/
// The Generic version
var SimpleMath = /** @class */ (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMath.prototype.calculate = function () {
        // You can a + operator to tell TS that these will be of type number.
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var math = new SimpleMath(30, "yes"); // => Argument of type '"yes"' is not assignable to parameter of type 'number'.ts(2345)
console.log(math.calculate());
