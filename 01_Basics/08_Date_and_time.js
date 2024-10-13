let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());          //Sun Oct 13 2024
console.log(myDate.toLocaleString());       // 10/13/2024, 5:41:23 PM
console.log(myDate.toLocaleDateString());  // 10/13/2024
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let date = new Date(2024,9,13,10,48,34);
console.log(date);
console.log(date.toDateString());    // Sun Oct 13 2024
console.log(date.toLocaleString());   // 10/13/2024, 10:48:34 AM
// YY MM DD

let myNewDate = new Date("2024,10,13");
console.log(myNewDate.toLocaleString());

// MM DD YY

let Date1 = new Date("10,13,2024");
console.log(Date1.toLocaleString());
console.log(Date1.getTime());
console.log(Math.floor(Date.now()/1000));

