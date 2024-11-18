const email = "ahmadali2004@gmail.com";

if (email) {
    console.log("truthy value");
    
    
} else {

    console.log("not a truthy value");
    
}
//falsy values
//  false,0,-0,BigInt 0n, "", null, undefined, Nan

//truthy values

// "false" , "0", " " {}

let arr = [];

if (arr.length===0) {
    console.log("array");
    
} else {
    console.log("not a array");
    
}

const obj = {}

if (Object.keys(obj).length ===0) {
    console.log("Empty object");
    
}