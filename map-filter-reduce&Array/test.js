// Practice 1 : add number in array 
let arr = [1,2,3,4,5]
let a = 10;
arr.push(a);
console.log(arr);

// add numbers in the array until 0 is not added
// let arr1 = [1,2,3,4,5]
// let b; 
//     do {
//         // b = prompt("Enter a number : ")
//         // b = number.parseInt(b)
//         arr1.push(b);
//     } while (b != 0);
//     console.log(arr1);

// filter function use and and filter diveded values by 10
let arr_10 = [12,34,10,100,190,87,165,950];
let arr_10_filter = arr_10.filter((d)=>{
    return d%10 == 0;
})
console.log(arr_10_filter);

// create an aray of square of given number : using map because map returns array
let arr_map = [12,10,100,50];
let arr_map_square = arr_map.map((d)=>{
    return d*d;
})
console.log(arr_map_square);

// use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let arr_reduce = [1,2,3,4,5];
let arr_reduce_factorial = arr_reduce.reduce((h,g)=>{
    return h*g;
})
console.log(arr_reduce_factorial); 