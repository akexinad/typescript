// SPREAD

const numbers = [1, 2, 56, 88, 100, 43, 87];
console.log(Math.max(2, 5, 34, 65, 99));
console.log(Math.max(...numbers));

// REST
// The rest operator is basically the spread operator used within the function parameters.
// And instead of just spreading the numbers like above, it creates an array of numbers.

function makeArray(...args: number[]) {
    return args;
}

console.log(makeArray(1, 2, 3, 5, 6, 7, 8));
