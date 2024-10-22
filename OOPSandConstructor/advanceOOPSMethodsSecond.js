let numbers = [1,2,3];
console.log(numbers);
// on - (numbers.) many methods will show (this methods js get from prototype)
// and prototype only of function can be but it is not a function

// internally js creates array with array constructor and we can call it using new keyword

let num = new Array(1,2,3);
console.log(Array.prototype);                      // Array.prototype or use this object.getPrototypeOf
console.log(Object.getPrototypeOf(num));           
console.log(num);                                  // [methods] those are in array form but array are object in js


function hell(){
    console.log("hmmm");
}
// prototype
console.log(hell.prototype);                        // {} and constructor inner in that
// we can change the prototype object to array
hell.prototype = [];
console.log(hell.prototype);
hell.prototype.push('1');
console.log(hell.prototype);




// using "new" keyword still it's a lanthy way to do it ........ so we have "class" keyword that is introduced in ES6
// class keyword
// classes are fake........ in js While JavaScript ES6 introduced the class keyword, it's important to understand 
// that classes in JavaScript are not the same as classes in traditional object-oriented languages like Java/C++. Here's why:
// 1. syntactic sugar - classes are essentially "syntactic sugar" over the existing prototype-based inheritance model. 
// they still use prototypes to achieve inheritance and object creation.
// 2. Prototypal Inheritance - JavaScript's inheritance model is based on prototypes, not classes. Each object has a prototype,
// which is another object that it can inherit properties and methods from.
// 3. No True Privacy - JavaScript classes do not offer true private properties or methods. While there are ways to achieve 
// privacy through closures or naming conventions
// 4. different semantic - this keyword behavior: In JavaScript, the value of this can change depending on how a function 
// is called, unlike in class-based languages where it is typically bound to the instance.

