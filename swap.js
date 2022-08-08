let first = 122;
let second = 130;
// console.log(first, second);
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//destructing er maddhome easily evabe swap kora jay
[first, second] = [second, first];
console.log(first, second);

// swap soloution with math operation, valid for only number
let a = 5;
let b = 7;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);