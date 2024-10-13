let arr = [0,1,2,3,4,5];

let students = ["Ahmad","Ali"];

// const array = new Array(1,2,3,4);

// console.log(array);
console.log(arr[4]);

// Array Methods

arr.push(6,7);
arr.pop()
console.log(arr);

console.log(arr.includes(6));
console.log(arr.includes(7));
console.log(arr.indexOf(4));

// slice or splice

const array = [1,2,3,4,5];

const sliced = array.slice(0,4);// 5 is excluded but it does not change the original array

console.log(sliced);
console.log(array);  // original array remain same

const arr2 = [1,2,3,4,5];

const splice = arr2.splice(1,2);

console.log(splice); // it prints 2,3 and remove it from original array

console.log(arr2); // splice remove 1 and 2 index from original array