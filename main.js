"use strict";
// TS intro
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = "hello raman";
console.log(msg);
/* variable types */
// boolean
var bool = true;
// number
var num = 22;
// string
var name = "Raman";
var sentence = "My name is " + name + "\nI am learning TS";
console.log(sentence);
// null
var Null = null;
// undefined
var undef = undefined;
// any  (no error given as no type restriction)
var random = '21';
random = 22;
random = true;
random = {};
random = null;
random = undefined;
random = function () {
    console.log("a function");
};
// random.name will give no error.
// random() will give no error.
// random.toLowerCase() will give no error.
///////////////////////////////////////////////
// number[] 
var arr1 = [1, 2, 3, 4];
// Array<number>
var arr2 = [5, 6, 7, 8];
// Array<any>
var arr4 = [1, 'raman', { "age": 21 }, true];
// tuple [string, number]
var arr3 = ['Raman', 22];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 22] = "red";
    Color[Color["green"] = 23] = "green";
    Color[Color["blue"] = 24] = "blue";
})(Color || (Color = {}));
;
var temp = Color.green;
// unknown (similar to 'any' type but can't access properties, assertion required)
var var1 = 10;
// var1.name -> error
// var1.toLowerCase() -> error
var1.toLowerCase(); //assertion
var1.name; //assertion
// multitype
var multitype;
multitype = 20;
multitype = true;
// object
var obj;
obj = { name: "raman", age: 21 };
var obj2;
obj2 = { age: 21, name: "raman" };
// functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// function with optional parameter
function fun(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + num2;
}
// default parameter 
function fun1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1 + num2;
}
function fullName() {
    var person = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        person[_i] = arguments[_i];
    }
    console.log(person);
}
function fullName1(person) {
    console.log(person);
}
var p1;
p1 = {
    fn: "raman",
    ln: "dwivedi"
};
fullName1(p1);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good Morning ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.work = function () {
        console.log("to manage a team");
    };
    return Manager;
}(Employee));
var m1;
m1 = new Manager("raman");
m1.work();
