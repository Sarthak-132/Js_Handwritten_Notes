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
const firstfunc = () =>{
    const secondFunc = () =>{
        console.log("How are you......?")
    }

    const addThirdfunc = (val1 , val2) =>{
        return val1 + val2;
    }
    console.log("Hey");


    secondFunc();
    console.log(addThirdfunc(1,2));
}

firstfunc();         // Hey   .... it happens when only firstfunc() is called and no other function is called
 
// outcome - 
// Hey 
// How are you......?
// 3




// Lexical scope -  lexical scope is the concept of determining the scope of a variable based on its declaration. 
//                  This means that the scope of a variable is determined by the block of code in which it is declared, 
//                  and not by the block of code in which it is used.
 
// The oneFun() function does not return a value, so it returns undefined by default. console.log(oneFun()); 
// logs the return value of oneFun(), which is undefined, to the console.
// value
// undefined
// function oneFun(){
//     const myVar = "value";
//     function twoFun(){}
//     const newFun = function (){}
//     const arrowFun = () => {}
//     console.log(myVar);
// }
// console.log(oneFun());



// same thing will come as output     // value // inside Function twoFun // undefined

// function oneFun(){
//     const myVar = "value";
//     function twoFun(){
//         console.log("inside Function twoFun");
//     }
//     const newFun = function (){}
//     const arrowFun = () => {}
//     console.log(myVar);
//     twoFun();
// }
// console.log(oneFun());



// same thing will come as output     // value // inside Function twoFun 345 // undefined
// HERE myVar variables's value is present in function twoFun() and as well in oneFun() so it will print 345 val.. of twoFun()
// function oneFun(){
//     const myVar = "value";
//     function twoFun(){
//         const myVar = "345"
//         console.log("inside Function twoFun", myVar);
//     }
//     const newFun = function (){}
//     const arrowFun = () => {}
//     console.log(myVar);
//     twoFun();
// }
// console.log(oneFun());


// same thing will come as output     // value // inside Function twoFun value // undefined
// HERE myVar variables's value is not present in function twoFun() but in oneFun() it is present so it will print value
// if it is outside the function still it will print value

// const myVar = "value";
// function oneFun(){
//     const myVar = "value";
//     function twoFun(){
//         // const myVar = "345"
//         console.log("inside Function twoFun", myVar);
//     }
//     const newFun = function (){}
//     const arrowFun = () => {}
//     console.log(myVar);
//     twoFun();
// }
// console.log(oneFun());



// 
const myVar = "value";
function oneFun(){

    function twoFun(){
        const arrowFun = () => {
            console.log ("inside Function twoFun", myVar);
        }
        arrowFun();     //twoFun() is called - ERROR (maximum call stack size exceeded)
    }
    
    console.log(myVar);
    twoFun();
}
console.log(oneFun());