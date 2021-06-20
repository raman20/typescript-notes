// TS intro

export { };
let msg = "hello raman";
console.log(msg);

/* variable types */

// boolean
let bool: boolean = true;

// number
let num: number = 22;

// string
let name: string = "Raman";
let sentence: string = `My name is ${name}
I am learning TS`;
console.log(sentence);

// null
let Null: null = null;

// undefined
let undef: undefined = undefined;

// any  (no error given as no type restriction)
let random: any = '21';
random = 22;
random = true;
random = {};
random = null;
random = undefined;

random = () => {
    console.log("a function");
}

// random.name will give no error.
// random() will give no error.
// random.toLowerCase() will give no error.

///////////////////////////////////////////////


// number[] 
let arr1: number[] = [1, 2, 3, 4];

// Array<number>
let arr2: Array<number> = [5, 6, 7, 8]

// Array<any>
let arr4: Array<any> = [1, 'raman', { "age": 21 }, true];

// tuple [string, number]
let arr3: [string, number] = ['Raman', 22];

// enum
enum Color { red = 22, green, blue };
let temp: Color = Color.green;

// unknown (similar to 'any' type but can't access properties, assertion required)
let var1: unknown = 10;
// var1.name -> error
// var1.toLowerCase() -> error
(var1 as string).toLowerCase(); //assertion
(var1 as { name: string }).name; //assertion

// multitype
let multitype: number | boolean;
multitype = 20;
multitype = true;

// object

let obj: Object;
obj = { name: "raman", age: 21 };

let obj2: { name: string, age: number };
obj2 = { age: 21, name: "raman" };

// functions

function add(num1: number, num2: number) {
    return num1 + num2
}

add(5, 10);

// function with optional parameter
function fun(num1: number, num2?: number) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + num2;
}

// default parameter 
function fun1(num1: number, num2: number = 10) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + num2;
}

function fullName(...person: any[]) {
    console.log(person);
}

// interface
interface person1 {
    fn: string;
    ln?: string;
}

function fullName1(person: person1) {
    console.log(person);
}

let p1: person1;

p1 = {
    fn: "raman",
    ln: "dwivedi"
}

fullName1(p1);

// classes

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log('Good Morning ' + this.employeeName);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }

    work() {
        console.log("to manage a team");
    }
}

let m1: Manager;
m1 = new Manager("raman");
m1.work();
