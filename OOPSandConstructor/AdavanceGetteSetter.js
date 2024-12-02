// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     fly() {
//         alert("I'm flying")
//     }
//     get name(){
//         return this._name
//     }

//     set name(newName){
//         this._name = newName
//     }
// }

// let a = new Animal ('Bruno');
// a.fly()
// console.log(a.name)





// class Person {
//     constructor(firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     // get - used as we can access it  as a object key (property) instead of property method.
//     get fullNameOption(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     setName(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     set fullName(fullName){
//         const [firstName , lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person_1 = new Person("harshit" , "sharma" , 6);
// // console.log(person_1.firstName);
// // console.log(person_1.fullName());
// // console.log(person_1.fullNameOption);

// console.log(person_1.firstName);
// console.log(person_1.lastName);

// person_1.setName("Mohit" , "Pawar");

// console.log(person_1.firstName);
// console.log(person_1.lastName);