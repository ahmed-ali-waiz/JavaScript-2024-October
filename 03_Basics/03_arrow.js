const user = {

    name : "Ahmad",
    age: 20,

    showMessage : function(){
     
        console.log(`${this.name} welcome to website`)
        console.log(this)
    }
}
user.showMessage()
user.name = "Ali"
user.showMessage()

// console.log(this)   {}


//Arrow function

const ahmad = ()=>{
    console.log("Hi I am Ahmad Ali")
}
ahmad()

// let addTwo = (a, b)=>{
//    return a + b
// }

//Another way of writing arrow function
//Implicit return


let addTwo = (a, b)=> (a + b)


console.log(addTwo(3,4))