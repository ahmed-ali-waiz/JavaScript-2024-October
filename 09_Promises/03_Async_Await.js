// async function Ahmad(){
//     let LahoreWeather = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 5000);
//     })

//     let IslWeather = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve("28 deg")
//         }, 10000);
//     })

     // Sequential Awaiting: When you await one promise after the other and then log both results together, 
    // the final log happens only after the last promise resolves.

    // let lahore = await LahoreWeather;  // Waits 1 second
    // let isl = await IslWeather;         // Then waits 7 seconds
    // console.log("Lahore Weather:", lahore);
    // console.log("Islamabad Weather:", isl);

    // the above example shows sequential awaiting


    // let lahore = await LahoreWeather;
    // console.log("Lahore Weather:", lahore);

    // let isl = await IslWeather;
    // console.log("Islamabad Weather:", isl);


//     console.log("Fetching lahore weather plz wait...");
//     let lahore = await LahoreWeather;  
//     console.log("Fetched lahore weather :" + lahore);
//     console.log("Fetching isl weather plz wait...");
//     let isl = await IslWeather;         
//    console.log("Fetched isl weather :" + isl);
   
//     return[lahore,isl]
// }
// let a = Ahmad()
// a.then((ali)=>{
//     console.log(ali);
    
// })

// Error handling

setTimeout(() => {
    console.log(`Getting data plz wait ...`)
    
}, 2000);

try{
    console.log(Ahmad);
    
}
catch(error){
  console.log("Shaka boom");
  
}
setTimeout(() => {
    console.log(`Fetching data from Ahmad plz wait ...`)

}, 3000);

setTimeout(() => {
    console.log(`Hacking gmail  plz wait ...`)
    
}, 4000);
