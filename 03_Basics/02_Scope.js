let a = 10;
const b= 20;
var c = 30;

if(true){
   let a = 20;  
//    b=10;   it will give error because I use const it means its value cant be changed anywhere nor re-declare
    c= 40
}
console.log(a)
console.log(b)
console.log(c)

function one(){
    username = "ahmad";

    function two(){
        age = 20;
        console.log(username)
    }
    two()
}
one()


if(true){
    let username = "Ahmad"
    if(true){
        let lastName = "Ali"
        console.log(username + lastName)
    }
    // console.log(lastName)  outside of scope
}
// console.log(username)   outside of scope give error


//      intresting

console.log(addone(7))

function addone(num){
    return num+1
}

// console.log(addtwo(8));    it will give error because we hold it in variable and we have to call it after initialization


let addtwo = function(num2){
    return num2+1
}

console.log(addtwo(8));