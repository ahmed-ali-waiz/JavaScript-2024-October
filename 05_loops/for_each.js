const lang = ["Java", "C++", "JavaScript"];

// lang.forEach((item)=> {
//     console.log(item);
    
// })

lang.forEach(function (element) {
    // console.log(element);
    
});

lang.forEach((item,index,array)=>{
    // console.log(item,index,array);
    
})

const myLan = [
    {
        langName : "Java Script",
        fileName : "js"
    },

    {
        langName : "C++",
        fileName : "cpp"
    },

    {
        langName : "Java ",
        fileName : "java"
    },
]

myLan.forEach( (item)=>{
    console.log(item.langName);
    
} )