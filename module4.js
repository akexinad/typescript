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
// IMPORTING NAMESPACES
/// <reference path="math.ts" />
// You then have to run the command: tsc --outFile [filename where imports happen] [filenames where namespaces exist, including the app.ts file]
// NAMESPACES
// Namespaces have the ability to structure your scopes and execution contexts in order to avoid variable name collisions.
// NOTE that you have to export the objects that you to be available outside of the namespace scope.
var GeometryMath = MyMath.Geometry;
console.log(GeometryMath.calculateRectangle(20, 20));
console.log(GeometryMath.calculateCircumference(20));
