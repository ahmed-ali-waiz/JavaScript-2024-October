function add(num1,num2) {
    return ( num1+num2)
}

let a = add(4,8)
console.log(a)  

function message(username){
    if(username === undefined){
        console.log("please enter a username")
    }
    return  `${username} just logged in `
}
console.log(message("Ahmad"))   //Ahmad just logged in
message()   // please enter a username

function calculateMart(...num1){
    return num1
}

console.log(calculateMart(400,200,467))
function calculateMartP(val1,val2, ...num1){
    return num1
}

console.log(calculateMartP(400,200,467,399,700))

const user = {
    username : "Ahmad",
    age : 20,
}
function objectsPassing(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

handleo