// print array element
let  num = [1,2,3,4,5,6];
for (let i = 0; i < num.length; i++) {
    
    console.log(num[i])
}

// to print array element's square-----> forEach used for objects
num.forEach((element)=>{
    console.log(element*element);
})

// // if you are working in html collection then you can not use forEach loop you have to use Array.from method 
// // Array.from method is used to create an array from any other object
// // you can use forEach loop but first you to use Array.from method for convert that element into array
// let num_num = "Harry";
// let num_num_nUmber = Array.from(num_num);
// console.log(num_num_nUmber);

// // -------> for...of loop for array
for (j of num){
    console.log(j);     //1 2 3 4 5 6 vertical
}


// //  for...in ----> key number gives index keys not their values 
// for (k in num){
//     console.log(k);    // 0 1 2 3 4 5
// }
