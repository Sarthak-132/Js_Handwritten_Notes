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
    console.log(`I am ${this.firstName} and i am ${this.age}`);
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


console.log(personInfo.about());
