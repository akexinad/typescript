

// INTERFACES


interface NamedPerson {
    firstName: string;
    age?: number; // The ? means that age is optional.
    [propName: string]: any;
    greet?(lastName: string): void;
}

const person = {
    firstName: "Max",
    age: 27,
    hobbies: ['cooking', 'sports'],
    greet(lastName: string) {
        console.log(`Hi my name is ${ this.firstName } ${ lastName }`);
        
    }
}

function greet(person: NamedPerson) {
    console.log(`Hello ${ person.firstName }`);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

// Strict checks only happen when you pass in an object literal.

// greet({
//     firstName: "Max",
//     // age: 27
//     hobbies: 'sports'
// });
changeName(person);
person.greet('Lopez');

class Person implements NamedPerson {
    firstName: string;
    greet(lastName: string) {
        console.log(`Hi my name is ${ this.firstName } ${ lastName }`);        
    };
}

const myPerson = new Person();
myPerson.firstName = "Federico";
greet(myPerson);
myPerson.greet("Fellini");

