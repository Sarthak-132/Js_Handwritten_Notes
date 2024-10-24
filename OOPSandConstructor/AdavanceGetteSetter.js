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





class Person {
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person_1 = new Person("harshit" , "sharma" , 6);
console.log(person_1);

