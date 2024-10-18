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
