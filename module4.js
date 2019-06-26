"use strict";
// IMPORTING NAMESPACES
/// <reference path="math.ts" />
// You then have to run the command: tsc --outFile [filename where imports happen] [filenames where namespaces exist, including the app.ts file]
// NAMESPACES
// Namespaces have the ability to structure your scopes and execution contexts in order to avoid variable name collisions.
// NOTE that you have to export the objects that you to be available outside of the namespace scope.
console.log(MyMath.calculateRectangle(20, 20));
console.log(MyMath.calculateCircumference(20));
