"use strict";
// DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// A decorator is basically a TS function to which you pass it the class constructor.
function logged(constructorFn) {
    console.log(constructorFn);
}
// @logged(false)
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hello!!!!');
    }
    return Person;
}());
// FACTORY
function logging(value) {
    return value ? logged : null;
}
// @logging(false)
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// ADVANCED DECORATORS
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// @logging(false)
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
// const plant = new Plant();
// (<any>plant).print();
// METHOD DECORATOR
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// PROPERTY DECORATOR
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
// project.calcBudget();
// PARAMETER DECORATOR
function printInfo(target, methodName, paramIndex) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("My Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);