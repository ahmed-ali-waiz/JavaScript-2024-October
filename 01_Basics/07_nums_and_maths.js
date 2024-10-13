const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const number = 332.293;
console.log(number.toPrecision(4));

//Maths

console.log(Math);
console.log(Math.abs(-12));  // abs changes the negative value into positive but positive remain positive.

console.log(Math.min(5,6,7));
console.log(Math.max(5,6,7));

console.log(Math.ceil(4.4));    // 5
console.log(Math.floor(4.8));  // 4
console.log(Math.round(9.8));
console.log(Math.pow(2,3));     //8
console.log(Math.pow(5,3));   //125
console.log((Math.random()*10)+1);

console.log(Math.floor((Math.random()*10)+1));
const max = 10;
const min = 20;

console.log(Math.floor(Math.random()* max- min+1) + min)
