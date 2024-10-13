// Que - isEven 
// input : 1 number
//  output : true or false

// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

function isEven(number){
    return number % 2 == 0;
}
console.log(isEven(5));



// Que - function 
// input - string
// output - firstString

function firstChar(string){
    return string[0];
} 
console.log(firstChar('raj'));


// Que - function
// input - array , target (number)
// output - index of a target...... if target present in the array

function findTargetIndex(array , target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;        
    // return -1 given because loop iterate from first index to last index and it does not find target index that's why returned -1
}

const array = [1,2,3,4,5,6,7,8,9,10];
const targetValue = findTargetIndex(array, 10);
console.log(targetValue);



// Funtion expression
// what is Funtion expression ?
// Funtion expression is a function declaration that can be assigned to a variable or passed as an argument to another function.

// function singHappyBirthday(){
//     console.log("happy birthday to you");
// }


// ERROR = "singHappyBirthday" has already been declared.

// function expression 
const singHappyBirthday = function(){
    console.log("happy birthday to you");
}
console.log(singHappyBirthday);

// Arrow function 
const sum = (num1 , num2, num3) => {
    return num1 + num2 + num3;
}
console.log(sum(1,2,3));

// Arrow function
const isEv = number => number % 2 == 0;  // when only one parameter is present then it can be used

console.log(isEv(5));

// Hoisting

// in case of function expression and arrow function they are not hoisted
hello();
function hello(){
    console.log("hello");
}

// ERROR = can't access hello1 before initioalization.....
// hello1();
// const hello1 = function(){
//     console.log("hello namaste");
// }


// ERROR = can't access hello1 before initioalization.....
// hello2();
// const hello2 = () => {
//     console.log("namaste duniya");
// }




// function inside function




