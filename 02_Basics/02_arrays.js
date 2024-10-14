const heroes = ["thor","iron Man","Captain America"];
const heroes2 = ["Hulk","spider man","Batman"];

// heroes.push(heroes2)

// console.log(heroes);
// console.log(heroes[3][1]);

let newHeroes = heroes.concat(heroes2);

console.log(newHeroes);

//spread Opearator

let AllHeros = [...heroes, ...heroes2];
console.log(AllHeros);

// flat method


let arr = [1,2,3,[4,5,6],[7,8,[9,2]]];

let arr2 = arr.flat(3);

console.log(arr2);

console.log(Array.isArray("Ahmad"));
console.log(Array.from("Ahmad"));
console.log(Array.from({name1: "Ahmad"})); //intresting

let ahmad = 10;
let Ali = 20;
let waiz = 30;

console.log(Array.of(ahmad,Ali,waiz));