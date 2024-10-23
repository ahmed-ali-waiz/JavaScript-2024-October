//Immidiately invoked function expression


(function name(){
    console.log("Ahmad Ali")
})();

//passing arguments to iife

((name)=>{
    console.log(`DB connected to ${name}`)
})("waiz");