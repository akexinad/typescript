

// DECORATORS

// A decorator is basically a TS function to which you pass it the class constructor.

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    
    constructor() {
        console.log('Hello!!!!');
        
    }
}