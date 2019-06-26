namespace MyMath {
    const PI = 3.14;
    
    export function calculateCircumference(diameter: number) {
        return Math.round(diameter * PI);
    }
    
    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}