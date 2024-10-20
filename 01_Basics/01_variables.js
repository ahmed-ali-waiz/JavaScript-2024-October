const passward = 123321;

// we can use const when the value of variable remain constant and should not change.

console.log(passward);

 // if we can declare passward again it give an error .
  

 //Declaring const in scope variable .
 /* If we declare a const value inside the block it should on applicable inside
 it and we can also redeclare it outside of the block like : */

 if (true) {
   const passcode = 123;
   console.log(passcode);
 }
 passcode = 321;
 console.log(passcode);
  
 let ahmad;
 a= 10; b=20;
 ahmad = a+b;
 console.log("result is : " + ahmad);

 /* let variable is mostly used in js and we  use  let because variables declared 
    with let are blocked scope, it means they it means you cannot declare the variable 
    in same scope but you can change the value of variable.*/

if (true) {
    let Ahmad = 123;
    // let Ahmad = 321;      // it will throw error.
    Ahmad = 321;
    console.log(Ahmad);
}
 let Ahmad = 456;
 console.log(Ahmad);    // but we can re-declare it outside the scope.
 
 /* You should not use var variable in js because if they are declared outside of 
   scope then they are globally scoped . And if you want to change the value of variable 
   inside the scope it changes the other one */
 
var boss = 678;
if(true){
    var boss = 456;
    boss = 123;
    console.log(boss);
} 
console.log(boss);   // result 123, but i did not change the value outside the scope 
  
// so if you want to avoid these mistakes dont use var .