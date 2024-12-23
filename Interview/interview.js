// POLYFILL - method's custom things

// custom map function
Array.prototype.myMap = function (cd) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cd(this[i], i, this));
  }
  return temp;
};

// custom filter function
Array.prototype.myFilter = function (cd) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cd(this[i], i, this)) temp.push(cd(this[i]));
  }
  return temp;
};

// custom reduce function
Array.prototype.myReduce = function (cd) {
  var acccumulator = initialValue;
  for (let i = 1; i < this.length; i++) {
    acccumulator = acccumulator ? cd(acccumulator, this[i], i, this) : this[i];
  }
  return acccumulator;
};

// map vs forEach

// 1. map returns new array
const arr = [2, 3, 4, 5];
const mapResult = arr.map((item) => {
  return item + 2;
});
console.log(mapResult); // [ 4, 5, 6, 7 ]

// 2. donot modify og array

// 1. didn't returned anything
// const foreachResult = arr.forEach((item) => {
//   return item + 2;
// });
// console.log(foreachResult);          // undefined

// 2. modify og array
const foreachResult = arr.forEach((item, i) => {
  arr[i] = item + 2;
});
console.log(foreachResult, arr); // undefined [ 4, 5, 6, 7 ];

// output name with uppercase - map / forEach / for loops Method to solve this question
let stu = [
  { name: "piyush", age: 20 },
  { name: "shubham", age: 21 },
  { name: "shreya", age: 21 },
];

let names = [];
for (let i = 0; i < stu.length; i++) {
  names.push(stu[i].name.toUpperCase());
}

console.log(names); // [ 'PIYUSH', 'SHUBHAM', 'SHREYA' ]

// SetTimeout with Closure

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
a();
// 3 , 3 , 3   so use let as solution

// Curring function
// curring function is a function that takes one argument at a time and returns a new function expecting the next arguments
// It is a coversion of function from callable as this f(a,b) into callable as this f(a)(b).
// why use it ?  -
// 1. to passing the same variable again and again
// 2. create higher order function
// 3. function pure and less prone to errors
function f(a) {
  return function (b) {
    // console.log(a, b);
    return `${a} ${b}`; // or
  };
}
console.log(f(5)(6)); // 5 6
console.log(f(5)); // [Function(anonymous)];

// sum (2)(3)(4)
function Sum(a, b, c) {
  return a + b + c;
} // 9
console.log(Sum);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(3)(4)); //sum(2)(3)(4);     // 9
