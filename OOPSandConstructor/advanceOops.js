// Methods - 
// Function inside objects  - this keyword
// const family = {
//     firstName : "Mohan",
//     age : 25,
//     about : function(){
//         console.log(`Hey I'm new in this family, my name is ${this.firstName} and i am ${this.age} years old`);
//         console.log(this)                       // this keyword is object itself it is taking whole persons object
//         console.log(this.firstName, this.age);     
//     }
// }
// console.log(family.about());
// console.log(family.firstName);
// console.log(family);






// function personInfo(){
//     console.log(`I am ${this.firstName} and i am ${this.age} years old.`);
// }

// const person_1 = {
//     firstName : "Mohan",
//     age : 25,
//     about : personInfo     
// }

// const person_2 = {
//     firstName : "neetin",
//     age : 29,
//     about : personInfo
// }

// const person_3 = {
//     firstName : "hariom",
//     age : 27,
//     about : personInfo
// }

// personInfo();
// person_1.about();
// person_2.about();
// person_3.about();
// console.log(person_1.about());   // personInfo.about is not defined.........
// console.log(person_2.about());   // personInfo.about is not defined.........



// this keyword
// console.log(this);                  // gives window object
// console.log(window);                // gives window object
// console.log(this === window);       // true



// function myFunc(){
//     console.log("Hello");
// }
// myFunc();
// window.myFunc();             // same output as function myFunc()



// function myFunc(){
//     console.log(this);
// }
// window.myFunc();            // gives window object  ......  it can create problem that's why we use use strict mode


// use strict mode
// "use strict";
// function myFunc(){
//         // "use strict"
//         console.log(this);
//     }
//     window.myFunc();                      // gives undefined 



// call apply and bind - interview purpose


// suppose we want to borrow about function from user_1 to user_2

// function harry(hobby , favMusician){
//     console.log(this.firstName , this.age , hobby , favMusician);
// }

// const user_1 = {
//     firstName : "MohanDas",
//     age : 24,
//     about : function(hobby , favMusician){
//         console.log(this.firstName , this.age)
//         console.log(this.firstName , this.age, hobby , favMusician );
//     }
// }


// You can also write it directly as call it method or function
// const user_1 = {
//     firstName : "MohanDas",
//     age : 24,
//     about(hobby , favMusician){
//         console.log(this.firstName , this.age)
//         console.log(this.firstName , this.age, hobby , favMusician );
//     }
// }
 
// const user_2 = {
//     firstName : "BhagwanDas",
//     age : 26,
// }

// user_1.about.call(user_2);                               // BhagwanDas 26
// user_1.about.call();                                     // UNDEFINED UNDEFINED
// user_1.about.call(user_2 , "guitar"  );                  // BhagwanDas 26 guitar UNDEFINED
// user_1.about.call(user_2 , "guitar" , "pritam");         // BhagwanDas 26 guitar pritam

// // call
// harry.call(user_2 , "hp" , "motorola");                  // BhagwanDas 26 hp motorola


// // apply uses same as call just by in array
// user_1.about.apply(user_2 , ["instument_banger" , "ukolele"]);               // BhagwanDas 26 hp motorola

// // bind - always return a function
// let harryFunc = harry.bind(user_2 , "guitar" , "bach");
// harryFunc();



// do not do this mistake
// user_1.harry(); 
// const harryFunction = user_1.about;
// console.log(harryFunction);                               // function: about



// Arrow Function ------------>
// arrow function's this takes from it's surrounding
// In noraml function like = client.about(); .....  it will take console.log(this) as main object or 
// in arrow function like => client.about(); it will take console.log(this) as window object

// const client = {
//     NameFirst : "Mohan",
//     age : 19,
//     about : () => {
//         console.log(this);        //--- it is calling window object
//         console.log(this.NameFirst , this.age);
//     }
// }
// client.about();                     // undefined undefined
// client.about(client);






