//for off 

const arr = [1,2,3,4];

for (const num of arr) {
    // console.log(num);
}


//for in
const arr1 = [1,2,3,4];

for (const key in arr1) {
    
        // console.log(key);
        
    }



const greeting = 'hello world';
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

//  Maps

const map = new Map();

map.set('PK' , "Pakistan");
map.set('In', "India");
map.set('Ch', "China");

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":", value);
    
}

// for (const key in map) {
//     console.log(key);
    
// }


// we cannot use for in loop on map because the for in loop iterates over the keys of an object
//but maps store their key value pair in differnt ways


