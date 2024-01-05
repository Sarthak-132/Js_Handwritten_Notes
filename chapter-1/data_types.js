// Primitive data types -  The predefined data types provided by JavaScript language are known as primitive data types.
//  Primitive data types are also known as in-built data types.
// nn bb ss u - 7 total
// null , number , boolean , bigint , string , symbol , undefined
// primitive data types are immutable   

let a = null;
let b = 67;
let c = true;
let d = BigInt(344) + BigInt(566);
let e = "Hello";
let f = Symbol("nice symbol");
let g ;
// null is an assigned value. It means nothing. undefined means a variable has been declared but not defined yet.   

console.log(a,b,c,d,e,f,g);
console.log(typeof f);

// objects are non primitive data types
// function
// object
// Array
const item = {
    "harry" : true,
    "shubh" : false,
    "aryan" : 76,
    "Rohan" : undefined 
}
console.log(item["harry"])    //true
console.log(item.aryan)   //undefined







