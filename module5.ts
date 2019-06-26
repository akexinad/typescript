

// INTERFACES


interface NamedPerson {
    firstName: string;
    age?: number; // The ? means that age is optional.
    [propName: string]: any;
}

const person = {
    firstName: "Max",
    age: 27,
    hobbies: ['cooking', 'sports']
}

function greet(person: NamedPerson) {
    console.log(`Hello ${ person.firstName }`);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

greet({
    firstName: "Max",
    // age: 27
    hobbies: 'sports'
});
changeName(person);
greet(person);