// compilation 

// code execution 

// why compilation

// hoW js code is execute ?

// what is global execution context ?

// what is local execution context ?

// closures  



// steps of js execution
// 1. compile - before execution of code even first line of code before execution it will see the whole code.
// compilation phase - 3 types of ----> i. Tokenization / lexing   ii. Parsing   iii. code generation
// i. Tokenization / lexing - Tokenizing and lexing in JavaScript involve breaking down a string of code into smaller, 
// meaningful units called tokens.
// ii. Parsing - it understand that breaking code convert into (AST - abstract syntax tree) 
// iii. code generation - code is converted into executable form of code

// why js do not run like 1st line take and run and then 2nd line take and run ... why it compile first and then run it?
// in ES6 it is not defined that compilation happen in js but mention that 
// 1. early error checking    2. determining appropriate scope for variable     need to be happen

// 2. code execute phase - executed code in js in execution context.

// Global execution context (GEC)  -  during creation phase add in stack and after execution phase delete from stack.
// i.   creation phase (CP)
// ii.  code execution phase (CE)

// after these things one more thing present in js that is "callstack" - it is take care of which line execute 
// which execution context is working and which function is call. it tracks how many lines of code is run until now

// when function get arguments or call then another one execution context created then it will add in callstack called
// function execution context.


// during the creation phase of global execution context varibale get alloted memory in global memory using var variable 
// meanwhile in the function keyword used function created save in memory directly so it will print function instead of 
// undefined like variable in global execution context. one more thing that if function expression (funciton name ) gives
// by var variable then it will declare it's space as undefined.


// in let and const case variable will be uninitialized instead of undefined. it means variable is created and got memory
// but not initialized. on run the code it shows uncaught ReferenceError - cannot access 'fname' before initialization.   
// let and const are hoisted but it is uninitialized.


// Hoisting - before execution this things storing in memory and excute only works for var keyword
// TDZ = 


// (TDZ)temporal dead zone - A block’s temporal dead zone starts at the beginning of the block’s local scope. 
// It ends when the computer fully initializes your variable with a value.
// Below are examples illustrating where a block’s temporal dead zone starts and ends.


{
    // bestFood's TDZ starts here (at the beginning of this block's local scope)
    // bestFood's TDZ continues here
    // bestFood's TDZ continues here
    // bestFood's TDZ continues here
    // console.log(bestFood); // returns ReferenceError because bestFood's TDZ continues here
    // bestFood's TDZ continues here
    // bestFood's TDZ continues here
    // let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
    // bestFood's TDZ does not exist here
    // bestFood's TDZ does not exist here
    // bestFood's TDZ does not exist here
  }
 
// bestFood's TDZ continues here
let bestFood; // bestFood's TDZ ends here
console.log(bestFood); // returns undefined because bestFood's TDZ does not exist here
bestFood = "Vegetable Fried Rice"; // bestFood's TDZ does not exist here
console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood's TDZ does not exist here


var fname;
console.log(fname);                     // undefined

let fullName ;
console.log(fullName);                  // undefined  

// const fame;
// console.log(fame);                   // uncaught syntaxerror = missing initializer in const declaration 




// console.log(this);
// console.log(window);
console.log(first);                     // undefined
var first = "harsha";                   
console.log(first);                     // harsha
// check output in console of browser
// var firstName = ."harshit";          // this error show before execution first line of code



// function execution context -

