// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNum.map( (num) => num + 10);

// console.log(newNums);

const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNum
             .map( (num) => num * 10)
             .map( (num) => num +1)
            //  .map( (num ) => num>=40)
            .filter( (num) => num > 40 )

// console.log(newNums);


// reduce function

const myNums = [1,2,3,4];

const totalValue = myNums.reduce( (acc,current) => {
    console.log(`acc  is ${acc} and current value : ${current}`);
    
     return acc + current
},0 )

console.log(totalValue);

