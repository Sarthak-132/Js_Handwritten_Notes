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

// difference between primitive and non primitive data types

// primitive : - those can't change on runtime suppose we allote a = 4 then a= 8 it will take same memory.
// non primitive : - those can change on runtime and can be more larger than primitive.


// type conversion and type conversion

// 1. when it converts by us the type of data
// 2. when itself js  chnage the type of data  -  type conversion


