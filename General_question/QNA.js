// what is JS?
/* Javascript is a language that is used to communicate with the computer like we talk to each other in hindi and other languages. 
Javascript is used to create dynamic websites and web applications  */

// Hoisting      output - 5
// x = 5;
// console.log(x);
// var x;

// // another way    output - 5
// z = 5;
// var z ;
// console.log(z);

// Hoisting         output - undefined
// console.log(y)
// var y = 5;

// Hoisting         output - error = Can not access 'y' before initialization
// console.log(y);
// let y = 5;

// Hoisting         output - error = Can not access 'y' before initialization
// console.log(y)
// const y = 5;


/* ANONYMOUS FUNCTION */
// The definition of the term "anonymous" is "unknown or without identification." An anonymous function in JavaScript is function 
// that has no name, or more precisely, one that lacks a name.An anonymous function has no identification when it is created.

var greet = function () {
    console.log("Welcome to Board Infinity!");
};
greet();
