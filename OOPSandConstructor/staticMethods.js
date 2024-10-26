// static methods and properties - static methods are methods that can call by class  adn not need to create object
// static property -  

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         console.log("animal " + Animal.capatalize(this.name)+ 'is walking');
//     }
//     // this static are not function this are directly connected to the class. it can call by class name
//     static capitalize(name){
//         return `${this.name} is me`;
//     }
// }

// const jai = Animal.classInfo();

// console.log(jai('you'));  // it doesn't work it is a static function method



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName; 
        this.lastName = lastName;
        this.age = age;
    }

    // this static are not function and can not call on the objects... this are directly connected to the class. it can call by class name
    static classInfo(){
        return 'this is a static method';
    }

    static desc = "This is static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating.`
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }

}

const person1 = new Person("Sachin" , "mehra" , 44);
console.log(person1.eat())
// person1.classInfo(); // it shows it is not a function ....... instead of 

const result = Person.classInfo();
console.log(result);
console.log(Person.desc);