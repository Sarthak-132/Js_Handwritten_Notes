// In JavaScript, methods are used to manipulate objects.

// number methods

let a = '10';
console.log(Number(a));          //10
console.log(typeof Number(a));   //number

let b = '14s0';
console.log( parseInt(b));       //14
console.log( parseInt(a));       //10


let C = '19.5';
console.log( parseInt(C));       //19



// --------------------------------------------------------------------------

// used given value is NaN or not  (isNaN)

let as = "2s2";
console.log(isNaN(as));


// used given value is toFinite or not  ()

let bs = Infinity;
console.log(isFinite(bs));


// used given value is isFixed or not  ()

let cd = 20.976564564;
console.log(cd.toFixed(12));




