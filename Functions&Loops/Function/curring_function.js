// Curring function - when function returns function called curring function.

function addWith(num1){
    return function(num2){
        return num1 + num2;
    }
} 

const addWith1 = addWith(1);
const addWith2 = addWith(2);

console.log(addWith1(100));
// console.log(addWith1(1)(100));   //or
console.log(addWith1(200));

console.log(addWith2(200));
console.log(addWith2(200));