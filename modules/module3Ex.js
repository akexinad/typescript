"use strict";
// Exercise 1
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
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log("BEEEEEEEEEEEEEEEEEEP!!!!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
        return console.log(this.acceleration);
    };
    return Car;
}());
var myCar = new Car("Herbert");
myCar.honk();
console.log(myCar.name);
console.log(myCar.acceleration);
myCar.accelerate(40);
// Exercise 2
var GeometricShape = /** @class */ (function () {
    function GeometricShape(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return GeometricShape;
}());
var shape = new GeometricShape();
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super.call(this) || this;
    }
    Rectangle.prototype.calculateSize = function () {
        return console.log(this.width * this.length);
    };
    return Rectangle;
}(GeometricShape));
var myRectangle = new Rectangle();
myRectangle.width = 20;
myRectangle.length = 20;
myRectangle.calculateSize();
var Person = /** @class */ (function () {
    function Person(_firstName) {
        if (_firstName === void 0) { _firstName = "The man has no name"; }
        this._firstName = _firstName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "That is not a name.";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var my = new Person();
console.log(my.firstName);
my.firstName = "jo";
console.log(my.firstName);
my.firstName = "Danny";
console.log(my.firstName);
// MAX'S SOLUTIONS
// EXERCISE 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 10;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("TOOOOOOOOT");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var myCar = new Car("BMW");
myCar.honk();
myCar.accelerate(20);
console.log(myCar.acceleration);
// EXERCISE 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        // Skipping type declarations since TS can infer types.
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// EXERCISE 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var my = new Person();
console.log(my.firstName);
my.firstName = "Jo";
console.log(my.firstName);
my.firstName = "Joseph";
console.log(my.firstName);
