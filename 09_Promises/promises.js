// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise has been completed");
//         resolve()
        
//     }, 2000);
// })

// promise.then((message) => {
//     console.log("Success:", message);
// })

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username : "Ahmad",  password : 123})
//     }, 2000);
// }).then((user)=>{
//     console.log(user);
    
// })


// Chanining Promise

const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // let error = true;      error something went wrong
        let error = false;
        if (!error) {
            resolve({username : "AhmadAli", pass : 1234})
        }
        else{
            reject("Error : Something went wrong")
        }
    }, 2000);
})

myPromise1.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Promise is either resolved or rejected"))


// Async await

const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // let error = true;      error 
        let error = false;
        if (!error) {
            resolve({username : "AhmadAli", pass : 1234})
        }
        else{
            reject("Error : Something went wrong")
        }
    }, 2000);
})

async function consumemyPromise2(){
   try{
    let response = await myPromise2
    console.log(response);
   }

   catch{
    console.log("error");
   }
    
}
consumemyPromise2()