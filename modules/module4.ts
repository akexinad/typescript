

// NAMESPACES

// Namespaces have the ability to structure your scopes and execution contexts in order to avoid variable name collisions.
// NOTE that you have to export the objects that you to be available outside of the namespace scope.

namespace MyMath {
    const PI = 3.14;
    
    export function calculateCircumference(diameter: number) {
        return Math.round(diameter * PI);
    }
    
    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}

console.log(MyMath.calculateRectangle(20, 20));
console.log(MyMath.calculateCircumference(20));

