const lang = ["Java", "C++", "JavaScript"];

 const values = lang.forEach((item)=>{
    // console.log(item);
    // return item;
    //                  //for each loop does not return any value
})
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

//implicit return

// let newNums = myNums.filter((num) => num >4);  it returns automatically 

//explicit return

let newNums = myNums.filter((nums) =>{
  return  nums > 4;
})

console.log(newNums);

const books = [

    {
        title : "book", genre : "History", publish : 1992,
    },
    {
        title : "book", genre : "fiction", publish : 1999,
    },
    {
        title : "book", genre : "chem", publish : 2003,
    },
    {
        title : "book", genre : "geography", publish : 2004,
    },
    {
        title : "book", genre : "History", publish : 2009,
    },
    {
        title : "book", genre : "chem", publish : 1904,
    },
    {
        title : "book", genre : "History", publish : 2004,
    },
    {
        title : "book", genre : "geography", publish : 2008,
    },
]

const userBooks = books.filter((bk) => bk.genre ==='History');

const userBook = books.filter((bk) => {

   return  bk.publish >2000 && bk.genre ==='History'
});


console.log(userBooks);

console.log(userBook);


