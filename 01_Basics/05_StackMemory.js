// Stack Memory (Primitive data types) use copy of the elements

let fname = "Ahmad";
let second_name= fname;
second_name = "Ali";
console.log(fname, second_name);  // It stores only copy of elements

//Heap memory (Non primitive or reference Data type) Use reference(original) of elements
let Waiz ={
    Name : "Ahmad",
    age : 20,
    Hobby : "Cricket",
}
let Hamid = Waiz;
Hamid.age = 16;

console.log(Hamid.age, Waiz.age);  // Both will gave 16