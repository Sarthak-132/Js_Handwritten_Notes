// Loops Of JS

// note :  If the condition never becomes false then the loop will never end and this might crash your run time  

// First 5 natural number's sum

let some = 0;
let n = 5;
for (let i = 0; i < n; i++) {
  some += i + 1;
}
console.log(some);

// factorial of 5 ..........next Method
let fact = 1;

for (let i = 5; i >= 1; i--) {
  fact = fact * i;
}
console.log(fact);

// let n = 5;
// let fact = 4;

// for(let i = 0; i < 4; i++) {
//     n = n*fact;
//     fact--;
// }
// console.log(n);


// FOR IN LOOP
let obj = {
    shivang : 98,
    sarthak : 92,
    shreya : 89,
    ritika : 80,
    abhinav : 69
}
// for in loop can access keys value but for of loop can't. It's only prints values 
for (let a in obj){
    console.log("value of a " + a + " is " + obj[a]);
}
// value of sarthak is 92
// value of shreya is 89
// value of ritika is 80
// value of abhinav is 69

// TypeError: obj is not iterable. it can be iterable if it is array or string........
// for (let b of obj){
//     console.log("value of b " + b + " is " + obj[b]);
// }


//  it can access only this keys not values = output given below.

// s 
// h 
// i 
// v 
// a 
// n 
// g 
for (let b of "shivang"){
    console.log(b);
}// while loop 
let numbing = 6;
numbing = Number.parseInt(numbing);

let z = 0 ;
while( z < numbing ){
    console.log(z);
    z++;
}


//  do-while loop : runs at least one time and then stops.

let x = 0;
do {
    console.log(x);
    x++;  
} while (x < numbing);