// forEach is used when we want to perform any task
// map function used when we want to create new array
// .map(value,index,array)
let a = [23, 65, 91];
a.map((value) => {
  console.log(value);
}); // prints individual values 23 65 91 vertical

// to create array
let ab = a.map((value) => {
  console.log(value);
  return value + 1; // prints individual values 23 65 91 vertical and array also     // on condition it gives true or false
});
console.log(ab);

// all the value of array
let abc = a.map((value, index, array) => {
  console.log(value, index, array);
  return value + index; // prints individual values 23 65 91 vertical and array also
});
console.log(abc);

// filter method : filter an array with values that passes a test

console.log("filter");
let arr2 = [45, 90, 23, 76, 39];
let arr_filter = arr2.filter((a) => {
  return a < 50;
});
console.log(arr_filter);

// reduce method :
let ar = [1, 2, 3, 4, 5, 6];
let newarr = ar.reduce((h, g) => {
  return h + g;
});
console.log(newarr);

// These are higher order method of array

// Map: creates a new array by transforming every element in an array individually.

// Filter: creates a new array by removing elements that don't belong.

// Reduce: takes all of the elements in an array and reduces them into a single value.
