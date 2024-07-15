// // Test - 2
// create a variable of string type and try to add number to it.
let a = "Harrish";
let b = 6                   // string
console.log((a+b));         //Harrish6

// use typeof to find the data type of the string
console.log(typeof(a+b));   //string

// create a  const object in js can you change it to hold a number later.
const c = {
    name : "Harrish",
    setion : false,
    num : 4
}
console.log(c)
// c = "Harrish"                 // Error throw you can't change it like this
// c = "nitesh"                 // Error throw you can't change it like this
// c = {}                      // Error throw you can't change it like this
c['name1'] = "nitesh"
console.log(c.num);
console.log(c['name']);
console.log(c);                // added name1 into c object

c['setion'] = true;
console.log(c);