// A SIMPLE GENERIC

function echo(data: any) {
    return data;
}

// console.log(echo("Max").length);
// console.log(echo(27).length); // => This just gives undefined
// console.log(echo({
//     name: "Max",
//     age: 27
// }).length);

// In the above example, since the type that is being returned is type of any, the compilation errors are not helpful.
// GENERICS help with giving better errors.


// This syntax tells TS that this is a generic function.
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max"));
console.log(betterEcho<number>(27).length); // => This gives a more helpful error if you looke into the console and the IDE is also aware.
console.log(betterEcho({
    name: "Max",
    age: 27
}));
