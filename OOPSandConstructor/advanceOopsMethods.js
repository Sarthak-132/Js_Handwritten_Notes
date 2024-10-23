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
//         return this.age >= 18;
//     }
//     return user;
// }


// const userName_1 = createUser("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
// const userName_2 = createUser("harshita", "vash", "harshita@gmail.com", 30, "my address")
// const userName_3 = createUser("harsh", "vashi", "harsh@gmail.com", 17, "my address")
// console.log(userName_1);
// console.log(userName_2);
// console.log(userName_3);
// const is181 = userName_1.is18();
// const is182 = userName_2.is18();
// const is183 = userName_3.is18();
// console.log(is181);
// console.log(is182);
// console.log(is183);
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
// console.log(userName_1);
// console.log(userName_1.about());
// console.log(userName_3.about());



// we have another way to create object and how can do like that if obj_2 do not have key1 then it will find it into obj_1
// normal way 
// const obj_1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj_2 = {
//     key3 : "value3",
// }
// console.log(obj_2.key1);    // undefined
// console.log(obj_1.key1);    // value1

// or 

// creating empty object 
// const obj_3 = {};                       
// obj_3.key4 = "value4";
// console.log(obj_3)

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

// const obj_4 = Object.create(obj_1);
// obj_4.hey = "Hello";
// console.log(obj_4);         
// // the things that javascript do not get in object there is reference present in [[prototype]] or __proto__ that is in console of browser

// console.log(obj_4.__proto__);                  // { key1: 'value1', key2: 'value2' }




// we can create normally object but using this method we can create __proto__ chain 

// const createMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >= 18
//     }
// } 

// function createUser(firstName , lastName , email , age , address){
//     const user = Object.create(createMethod);
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

// console.log(userName_1);
// console.log(userName_1.about());



// // function can also be treated as object 
// function myOwn(){
//     console.log("HelloMan");
// }

// myOwn.myownproperty = "can be my so called brothers";
// console.log(myOwn.myownproperty);                            // can be my so called brothers
// console.log(myOwn());                                        // HelloMan



// name properties teels us -----> name of function
// function provides more usefull properties
// Note - function gives us free space ...... in actual free kind of nothing only empty object {} ..... for sake of explanation
// and this object called prototype.....
 
// only function has the prototype property
// console.log(myOwn.prototype);       // gives {constructor} in console of browser
// myOwn.prototype.abc = "abc";
// myOwn.prototype.xyz = "xyz";
// myOwn.prototype.sing = function(){
//     return "i am ok"
// };
// console.log(myOwn.prototype);       
// console.log(myOwn.prototype.sing());       



// __proto__ - it is reference of Object chain that you creates.
// prototype - it is an empty Object. 


// we don't need one more function and define each methods because if we do not remember to add any one method it will lead mistake
// so we can do like that use prototype

// function createUser(firstName , lastName , email , age , address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = createMethod.about;
//     user.is18 = createMethod.is18;
//     return user;
// }

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };

// createUser.prototype.is18 = function(){
//     return this.age >= 18
// };

// const userName1 = createUser("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
// const userName2 = createUser("harshita", "vash", "harshita@gmail.com", 30, "my address")
// const userName3 = createUser("harsh", "vashi", "harsh@gmail.com", 33, "my address")

// console.log(userName1)
// console.log(userName1.about());




// new keyword
// 1. Empty object creates {} -like previous
// 2. return this object {} - like previous
// 3. do not need to use const user = Object.create(createUser.prototype); this line
// function createClient(fullName , adultAge){
//     this.fullName = fullName;
//     this.adultAge = adultAge;
// }

// createClient.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }

// const client = new createClient ("MohanDas" , 25);
// console.log(client);
// console.log(client.about());




// new keyword use - use then only start name of function with capital letter`
// this is called constructor function
// constructor function - that constructing something for us like object 
// function CreateUs(firstName , lastName , email , age , address){
//         // const user = Object.create(createUser.prototype);                no need of this line because of new keyword
//         // instead of targeting object name we use this keyword here
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
    
//         // return user;                                                     no need of this line because of new keyword
//     }
    
//     CreateUs.prototype.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     };
    
//     CreateUs.prototype.is18 = function(){
//         return this.age >= 18
//     };
    
//     const userName1 = new CreateUs("harshit", "vashsitha", "harshit@gmail.com", 28, "my address")
//     const userName2 = new CreateUs("harshita", "vash", "harshita@gmail.com", 30, "my address")
//     const userName3 = new CreateUs("harsh", "vashi", "harsh@gmail.com", 33, "my address")
    
//     console.log(userName1)
//     console.log(userName1.about());



//     // suppose we want to see key of the object then 
//     for(let key in userName1){
//         console.log(key);
//         // if we do not want to print any property of prototype then use hasOwnProperty method
//         if(userName1.hasOwnProperty(key)){
//             console.log(key);
//         }
//     }
