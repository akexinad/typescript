"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This is the conventional way of declaring variables in TS.
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 44;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Fellini", "fell");
console.log(person.username);
// THIS IS SHORTER SYNTAX FOR DECLARING CLASS METHODS AND VARIABLES.
var Car = /** @class */ (function () {
    function Car(make, model, designer) {
        if (designer === void 0) { designer = 'Pininfarina'; }
        this.make = make;
        this.model = model;
        this.designer = designer;
    }
    Car.prototype.printModel = function () {
        return this.model;
    };
    Car.prototype.setDesigner = function (designer) {
        this.model = designer;
        return designer;
    };
    return Car;
}());
var myCar = new Car('Ferrari', 'F40');
console.log(myCar.printModel());
console.log(myCar);
// INHERITANCE
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(model) {
        return _super.call(this, "Ferrari", model) || this;
    }
    return Ferrari;
}(Car));
var myOtherCar = new Ferrari("F40");
console.clear();
// GETTERS AND SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Rose";
console.log(plant.species);
// STATIC PROPERTIES AND METHODS
// Static props and methods can be used without having to instantiate the class.
// These are great if you are building helper classes which bundle some useful project specific tools.
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calculateCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(6));
// ABSTRACT CLASSES
// Abstract classes are classes that you CANNOT INSTANTIATE.
// You can only INHERIT from these classes.
// They sit there as an abstraction in your work.
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITPRoject = /** @class */ (function (_super) {
    __extends(ITPRoject, _super);
    function ITPRoject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITPRoject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITPRoject;
}(Project));
var newProject = new ITPRoject();
console.log(newProject);
newProject.changeName("Imagine Solve");
console.log(newProject);
