const num = 3;
console.log(Math.pow(num, 4));

const tumi = 24;
const ami = 30;
const gap = Math.abs(tumi - ami);// - skip korbe
console.log(gap);
if (gap < 7) {
    console.log("perfect for marriage");
}
else {
    console.log("boyosh hoyni");
}


const number = 3.59999;
const fullnum = Math.round(number);// round figure
console.log(fullnum);

// Math.ceil er kaj oporer number dekhabe
const n = 2.00001;
const n2 = Math.ceil(n);
console.log(n2);

// Math.floor er kaj . er porer onsgo bad diue dibe
const m = 5.99999;
const m2 = Math.floor(m);
console.log(m2);

// Math.random random number generate korbe 
console.log(Math.random());

for (i = 0; i < 10; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}
