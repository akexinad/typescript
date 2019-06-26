"use strict";
// NAMESPACES
// Namespaces have the ability to structure your scopes and execution contexts in order to avoid variable name collisions.
// NOTE that you have to export the objects that you to be available outside of the namespace scope.
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return Math.round(diameter * PI);
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateRectangle(20, 20));
console.log(MyMath.calculateCircumference(20));
