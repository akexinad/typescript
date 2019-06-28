

// DECORATORS

// A decorator is basically a TS function to which you pass it the class constructor.

function logged(constructorFn: Function): void {
    console.log(constructorFn);
}

@logged(false)
class Person {
    
    constructor() {
        console.log('Hello!!!!');
        
    }
}




// FACTORY

function logging(value: boolean) {
    return value ? logged : null;
}

@logging(false)
class Car {

}




// ADVANCED DECORATORS

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(false)
@printable
class Plant {
    name = "Green Plant";
}

// const plant = new Plant();
// (<any>plant).print();




// METHOD DECORATOR

function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

// PROPERTY DECORATOR

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value;
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: String;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
}

project.calcBudget();