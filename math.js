"use strict";
// NESTING NAMESPACES
var MyMath;
(function (MyMath) {
    var Geometry;
    (function (Geometry) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return Math.round(diameter * PI);
        }
        Geometry.calculateCircumference = calculateCircumference;
        function calculateRectangle(width, length) {
            return width * length;
        }
        Geometry.calculateRectangle = calculateRectangle;
    })(Geometry = MyMath.Geometry || (MyMath.Geometry = {}));
})(MyMath || (MyMath = {}));
