// arrow function 
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