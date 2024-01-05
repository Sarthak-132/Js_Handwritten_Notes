console.log("Sarthak");

let a = 67;
console.log(a);     // you can not do this like this in any keyword
a = "Hello";        // let a = 3;
console.log(a);


// You can change the type of the variable at run time in javascript 
// suppose you create a variable with string you can change the type of the variable after that it means 
// you don't need to define the type of the variable like string , bool , interger , array 


var  v = 34;
var  v = "hello";
console.log(v);

// Javascript is a dynamically typed language it means you don't need to define the type of the variable
// on run time you can change the type of the variable

// Javascript is a case sensitive language where harry and Harry are different kind of variable
let ab = "harry"; 
let ac = "Harry";
console.log(ab);
console.log(ac);


// var , let and const variable 
// var : global variable 
// const : to define constant variable 
// let : block scope variable 

// var can be updated and redeclared within it's scope 
var x = 34;
console.log(x)
var x = "hello";  // also valid x = "hello";
console.log(x)

// let can be updated and not redeclared 
let y = 'namaste duniya'
// let y = 56;        // not valid let y = 56;
y = 56;          // it's valid y = 56;
console.log(y);

//  const neither be updated and nor redeclared 
const z = 34;
// let z = 56;   // its  not valid to change the const

//  var variables are initialized with undefined whereas let and const variables are not initialized.
var m;  //valid 
// let m; or const m;  are not valid 


// differernce - hoisting , scope , update , redeclare and general define them