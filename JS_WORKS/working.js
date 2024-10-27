// compilation 
// code execution 

// why compilation

//  hoW js code is execute ?

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

// during the creation phase of global execution context varibale get alloted memory in global memory using var variable 
// meanwhile in the function keyword used function created save in memory directly so it will print function instead of 
// undefined like variable in global execution context. 
 


// Hoisting - before execution this things storing in memory




console.log(this);
console.log(window);
console.log(first);                     // undefined
var first = "harsha";                   
console.log(first);                     // harsha
// check output in console of browser
// var firstName = ."harshit";          // this error show before execution first line of code



