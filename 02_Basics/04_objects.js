const user = {}

user.id = "ahmadaliwattoo2004@gmail.com"
user.pass = "Ma nhi bataon ga ";
user.name = "Ahmad";

// console.log(user);

const newUser = {
    email: "Ahmad",
    userName: {
        first_name: "ahmad",
        Middle_Name : "Ali",
        LastName : "Waiz"
    },
    Is_loggedIn : false,
     passward: 123,
    
}
// console.log(newUser.userName.Middle_Name);

const obj = {...user, ...newUser};// we merge both objcts by using spread operator 
// console.log(obj)

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));