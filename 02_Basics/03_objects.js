// object literals

const mysym = Symbol("key1");

const user = {
    name : "Ahmad",
    [mysym] : "key1",
    age : 20,
    location : "Sahiwal",
    email : "ahmadaliwattoo2004@gmail.com",
    isloggedIn : false,
    "full name": "Ahmad Ali",
}

console.log(user.email);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user[mysym]);
user.age = 21;

Object.freeze(user);

user.location = "haveli lakha";
console.log(user.location);
console.log(user);
