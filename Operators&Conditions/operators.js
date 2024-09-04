// operators

// 1. Arithmatic operators ( + , - , * , / , % , ** , ++ , -- ) also know as math operators 
console.log("Arithmatic operators");
let a = 30;
let b = 5;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
console.log("a ++ = ", a ++);
console.log("a -- = ", a --);
console.log("a = ", a);
console.log(" ++a = ", ++a);
console.log(" --a = ", --a);
console.log("a = ", a);


// 2. Assignment Operators (= , += , -=, *= , /= , %= , **=)
console.log("Assignment operators");
let Assignment = 1;
Assignment += 5;
console.log(Assignment);
Assignment -= 5;
console.log(Assignment);
Assignment *= 5;
console.log(Assignment);
Assignment /= 5;
console.log(Assignment);


// 3. comparison Operator ( == , < , > , <= , >= , != , === , !== , ? )
console.log("Comparison operators");
let comp1 = 6;
let comp2 = 6;
console.log("comp1 == comp2", comp1 == comp2);
console.log("comp1 != comp2", comp1 != comp2);
console.log("comp1 === comp2", comp1 === comp2);
console.log("comp1 !== comp2", comp1 !== comp2);

// another kind of different data type comparison
let com1 = 6;
let com2 = "6";
console.log("com1 == com2", com1 == com2);
console.log("com1 != com2", com1 != com2);
console.log("com1 === com2", com1 === com2);
console.log("com1 !== com2", com1 !== com2);

// Another comparison operators 
let co1 = 6;
let co2 = "6";
console.log("co1 > co2", co1 > co2);
console.log("co1 < co2", co1 < co2);
console.log("co1 <= co2", co1 <= co2);
console.log("co1 >= co2", co1 >= co2);

// 4. logical operators
console.log("Logical Operators")
let m = 10;
let n = 20;
console.log(m <= n && m > n);
console.log(m <= n || m < n);
console.log(!m > n);
console.log(!m < n);
console.log(!false);


let x = 5;
let z = Math.pow(x,2);
console.log(z);


// Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or 
// undefined, or 0 and otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

let name;
console.log(name??false??"bahg");
// Expected output: false
