
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(index);
    
// }

// for (let index = 0; index < 10; index++) {

//     console.log(`outer loop is ${index}`);

//     for (let j = 0; j < 10; j++) {
        
//         console.log(`inner loop value is ${j} and outer loop value is ${index}`);
        
//     }
    
// }

for (let index = 0; index < 10; index++) {

    console.log(`Table of ${index} is :`);

    for (let j = 1; j <= 10; j++) {
        
        console.log(`${index} * ${j} = ${index*j}`);
        
    }
    
}