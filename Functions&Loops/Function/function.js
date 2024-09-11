// arrow function - it is a alternative of expresseion function not of declaration function.
// const hello = () => {
//     console.log("Hello World!");          // it will not run untill it execute this hello ();
//     return 'hi'
// }
// // hello();
// let v = hello();         // Hello world and in next line hi
// console.log(v);


// Normal function 
// function onePlusAvg(x,y){
//     return (1 + (x+y)/2);
// }
 
// let a = 2 ;
// let b = 5 ;
// console.log("the answer is " + onePlusAvg(a,b));


// first print vowel then consonent = JAVASCRIPTLOOPS
// The indexOf() method returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.

// function vowelsAndConsonants(s) {
//     let vowels = ["a","e","i","o","u"];

//     for (let v of s){
//         if(vowels.includes(v));
//         console.log(v);
//     }
//     for (let v of s){
//         if(!vowels.includes(v));
//         console.log(v);
//     }
//   }
//   vowelsAndConsonants("javascriptloops");

//   print marks from the objects
// let marks = {
//     shub : 23,
//     bhim : 45,
//     yada : 67,
//     raju : 2
// }
// for (let i=0; i<Object.keys(marks).length; i++){
//     // console.log(marks[i]); ......cannot do this like this.......to iterate array use this method
//     console.log( "Hello " + Object.keys(marks)[i] + " Your marks are : " + marks[Object.keys(marks)[i]] );
// }

// // another way 
// for (const key in marks) {
//     console.log(key + " your marks are : " + marks[key] );
// }


// / difference between loop and function 

// funciton -

// Functions are blocks of code that can be called multiple times from different parts of your program. 
// They take arguments, which are values passed to the function when it’s invoked, and may return a value.

// Code reuse: Write a function once and use it throughout your program.
// Modularity: Break down complex code into smaller, manageable functions.
// Easier maintenance: Update a function in one place, and the changes will propagate to all its callers.


// Loop - 

// Loops, on the other hand, allow you to execute a block of code repeatedly. 
// JavaScript provides several types of loops, including for, while, and do...while loops.

// Repeat a task until a condition is met.
// Iterate over a collection, such as an array or object.
// Perform a series of calculations or operations.



// It is printing the value of calculation but not returning any value from the function that's why it gives undefined
function returns(a , b) {                   // 6
    console.log(a * b);                     //underfined
}

let result = returns (2, 3);
console.log(result);



// typeof function

console.log(typeof returns);    //funciton
console.log(typeof returns());  //Nan and undefined