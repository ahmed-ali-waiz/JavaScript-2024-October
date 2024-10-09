let num = null;

console.log(typeof num);

let ValueInNumber = Number(num);

console.log(typeof  ValueInNumber)

console.log( ValueInNumber)

let num1 = "123abc";

console.log(typeof(num1));

let numValue = Number(num1);

console.log(typeof numValue);

console.log(numValue);   //Not a number it can be converted but it gives NAN.

// When the value is undefined it aslo convertes but it gives NAN.

// 10 => Number
// "ALi" => String
// "Ali12" => Nan
// undefined => Nan
// Null => 0
// true => 1, False=>0