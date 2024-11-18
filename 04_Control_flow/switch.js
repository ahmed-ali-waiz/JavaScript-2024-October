const operation = (`+,-,*,/`);
let result;
let num1 =3;
let num2 = 4;

switch (operation) {
    case `+`:
        result = num1 + num2;
        console.log(`Result: ${num1} + ${num2} = ${result}`);
        
        break;
    case `-`:
        result = num1 - num2;
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        break;
    case `*`:
        result = num1 * num2;
        console.log(`Result: ${num1} * ${num2} = ${result}`);
        break;
    case `/`:
        result = num1/ num2;
        console.log(`Result: ${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log(`kadoo`);
        
        break;
}
// add prompt to complete above code



