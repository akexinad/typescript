

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
    @overwritable(true)
    projectName: String;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(true)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
}

// project.calcBudget();




// PARAMETER DECORATOR

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("My Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);