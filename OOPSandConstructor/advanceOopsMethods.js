//  proto , prototype , class

const user_1 = {
    firstName : "Aditya",
    lastName : "Jhariya",
    email : "aditya@j.com",
    age : 23,
    address : "house number , colony , pincode , state",
    // two methods
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18(){
        return this.age >= 18
    }
}




// we can do like this

//  function (that create object)
//  add key value pair
//  object returns

// function createUser(firstName , lastName , email , age , address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     user.is18 = function(){
//         return this.age >= 18
//     }
//     return user;
// }


// const userName_1 = createUser("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
// const userName_2 = createUser("harshita", "vash", "harshita@gmail.com", 30, "my address")
// const userName_3 = createUser("harsh", "vashi", "harsh@gmail.com", 33, "my address")
// console.log(userName_1);
// const is18 = userName_1.is18();
// console.log(is18);
// console.log(userName_1.email);



// we have 2 methods is18 and about and it is repeating again and again so we can use it outer the function

// const createMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >= 18
//     }
// } 

// function createUser(firstName , lastName , email , age , address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = createMethod.about;
//     user.is18 = createMethod.is18;
//     return user;
// }

// const userName_1 = createUser("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
// const userName_2 = createUser("harshita", "vash", "harshita@gmail.com", 30, "my address")
// const userName_3 = createUser("harsh", "vashi", "harsh@gmail.com", 33, "my address")

// console.log(userName_1.about());
// console.log(userName_3.about());



// we have another way to create object and how can do like that if obj_2 do not have key1 then it will find it into obj_1
// normal way 
const obj_1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj_2 = {
    key3 : "value3",
}
console.log(obj_2.key1);    // undefined
console.log(obj_1.key1);    // value1

// or 

// creating empty object 
const obj_3 = {};                       
obj_3.key4 = "value4";
console.log(obj_3)

// now how can we create new object and how can we access obj_1 in new object creation
// it checks first in obj_4 and then in obj_1
// const obj_4 = Object.create(obj_1);
// console.log(obj_4);                         // {}
// obj_4.naming = "jakie";
// obj_4.key1 = "hello";
// console.log(obj_4.key1);                         // {naming: 'jakie', key1: 'hello'}

// console.log(obj_4);                         // {naming: 'jakie'}                   // 


// __proto__ , [[prototype]] , prototype
// proto , [[prototype]] - these two are same 
// prototype - it is different

const obj_4 = Object.create(obj_1);
obj_4.hey = "Hello";
console.log(obj_4);         
// the things that javascript do not get in object there is reference present in [[prototype]] or __proto__ that is in console of browser

console.log(obj_4.__proto__);                  // { key1: 'value1', key2: 'value2' }




// we can create normally object but using this method we can create __proto__ chain 

const createMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18
    }
} 

function createUser(firstName , lastName , email , age , address){
    const user = Object.create(createMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = createMethod.about;
    user.is18 = createMethod.is18;
    return user;
}

const userName_1 = createUser("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
const userName_2 = createUser("harshita", "vash", "harshita@gmail.com", 30, "my address")
const userName_3 = createUser("harsh", "vashi", "harsh@gmail.com", 33, "my address")

console.log(userName_1);
console.log(userName_1.about());



// function can also be treated as object 
function myOwn(){
    console.log("HelloMan");
}

myOwn.myownproperty = "can be my so called brothers";
console.log(myOwn.myownproperty);                            // can be my so called brothers
console.log(myOwn());                                        // HelloMan


