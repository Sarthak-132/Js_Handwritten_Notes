// Math.abs - convert in pos.... value

let negValue = -22;
console.log(Math.abs(negValue));

// Math.min and Math.max - here it can not access array and object

let array = [1,2,3,34,4,45];

console.log(Math.min(...array));
console.log(Math.max(...array));



// floor

let x = 10.5;
let y = 10.7;
console.log(Math.floor(y));   //10

// ceil 

console.log(Math.ceil(x));    //11
console.log(Math.ceil(y));    //11

// trunc

console.log(Math.trunc(x));   //10
console.log(Math.trunc(y));   //10