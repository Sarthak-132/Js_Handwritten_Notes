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




function personInfo(){
    console.log(`I am ${this.firstName} and i am ${this.age} years old.`);
}

const person_1 = {
    firstName : "Mohan",
    age : 25,
    about : personInfo     
}

const person_2 = {
    firstName : "neetin",
    age : 29,
    about : personInfo
}

const person_3 = {
    firstName : "hariom",
    age : 27,
    about : personInfo
}

personInfo();
person_1.about();
person_2.about();
person_3.about();
// console.log(personInfo.about());   // personInfo.about is not defined.........



// this keyword
console.log(this);                  // gives window object
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







