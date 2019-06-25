const double = (value: number) => value * 2;
console.log(double(10));




const greet = (name: string = 'Fellini') => {
    console.log(`Hello ${ name }`);
}
greet();
greet('Benigni');




const array: number[] = [-3 , 33, 38, 44, 5];
console.log(Math.min(...array));




const newArray: number[] = [55, 90];
newArray.push(...array);
console.log(newArray);




const testResults: number[] = [3.89, 2.99, 1.38];
const [ result1, result2, result3 ] = testResults;
console.log(result1, result2, result3);




type person = {
    firstName: string,
    experience: number
}

const scientist: person = {
    firstName: 'Fellini',
    experience: 20
}

const { firstName, experience } = scientist;

console.log(firstName, experience);