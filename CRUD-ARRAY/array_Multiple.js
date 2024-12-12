// const ar = [1, 2, 3];
// const arr2 = [...ar, 4, 5];
// console.log(ar);
// console.log(arr2);
// console.log(...ar);

// const add = function (number1, number2) {
//   return number1 + number2;
// };

// console.log(add(3, 4));

// const add3 = function (number1, number2, number3) {
//   return number1 + number2 + number3;
// };

// console.log(add3(3, 4, 4));

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");

// function sum(...theArgs) {
//   let total;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// // Expected output: 6

// console.log(sum(1, 2, 3, 4));
// // Expected output: 10

// sol1
// const arr = [1, 2, 3];
// // const arr2 = [2, 4, 6];

// const func = function (arr) {
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2);
//   }
//   return arr2;
// };

// sol2
// const funct = function(arr){
//     const arr2 = new Array(arr.length);

//     for(let i = 0; i<arr.length; i++){
//         arr2[i] = arr[i] * 2;
//     }
//     return arr2;
// }
// console.log(funct(arr))

// sol13
// Shallow copy
// const myfunction = function(arr) {
//     const arr2 = new Array(...arr);
//     // const arr2 = [...arr];

//     for(let i = 0; i<arr.length; i++){
//         arr2[i] = arr2[i]*2;
//     }
//     return arr2;
// }

// console.log(myfunction([1,2,3]))





// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEver(array) {

//   const evenArr = [];

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] % 2 == 0) {

//             evenArr.push(array[i]);

//         }
//     }

//     return evenArr;

//     }

// console.log(filterEver(array));



// reduce Method
// const arr = [1,2,3,4,5,6,7,8,9]
// const initialVal = 0;
// const total = arr.reduce(function(acc, ele){
//     acc = acc + ele;
//     return acc;
// }, initialVal);

// console.log("total : ", total);



// const arr = [1,2,3,4,5,6,7,8,9]

// const total = arr.reduce(function(acc, ele){
//     acc.push(ele*2);
//     return acc;
// }, []);

// console.log("total : ", total);




const arr = [1,2,3,4,5,6,7,8,9]

const total = arr.reduce(function(acc, ele){
    if(ele%2==0){
        acc.push(ele);
    }
    return acc;
}, []);

console.log("total : ", total);




