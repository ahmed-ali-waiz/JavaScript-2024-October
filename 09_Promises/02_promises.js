  // Promise.all 

  //it takes an array of promises and resolves only if all promises resolve successfully
  //  If any one promise fails, the entire Promise.all() fails.

let p1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("value 1");
  }, 2000);
});

let p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    // resolve("value 2");
    reject("Error : something went wrong")  // it will throw an error if promise.all is call
    
    
  }, 4000);
});

let p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("value 3");
  }, 6000);
});

// p1.then((value)=>{
//   console.log(value);
  
// })
// p2.then((value)=>{
//   console.log(value);
  
// })
// p3.then((value)=>{
//   console.log(value);
  
// })

// let promise_all = Promise.all([p1,p2,p3])

// promise_all.then((value)=>{
//     console.log(value); 
// })

//  Promise.allSettled

// The Promise.allSettled() method waits for all promises to either resolve or reject
//  and returns an array containing the status of each promise.


let promise_all = Promise.allSettled([p1,p2,p3])

promise_all.then((value)=>{
    console.log(value); 
})