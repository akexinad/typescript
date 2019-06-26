"use strict";
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
