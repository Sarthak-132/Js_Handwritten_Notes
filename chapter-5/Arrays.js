// Arrays in JavaScript are ordered collections of data that can store multiple values in a single variable. Each item in an array has a numeric index that allows access to it. Arrays start at index zero and can be manipulated with various methods.3 Arrays can hold values of mixed types and are dynamic. Array can hold more than one values.

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

