// A SIMPLE GENERIC

function echo(data: any) {
    return data;
}

console.log(echo("Max").length);
console.log(echo(27).length); // => This just gives undefined
console.log(echo({
    name: "Max",
    age: 27
}));


// A BETTER GENRIC WAY

// This syntax tells TS that this is a generic function.
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max"));
console.log(betterEcho<number>("27")); // => This gives a more helpful error
console.log(betterEcho({
    name: "Max",
    age: 27
}));
