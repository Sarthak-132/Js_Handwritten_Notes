// difference between synchronous programming and asynchronous programming js 
// Note - js is a single threded synchronous programming language

// synchronous programming =>

// Synchronous refers to operations or events that occur in a specific, sequential order, 
// where each task must complete before the next one begins, ensuring a linear and predictable flow.

// This means that a potentially complex task may take a while before all its steps are executed and completed. 
// In technical terms, synchronous calls are done in a single thread, and every operation being executed blocks
// that thread for the execution’s duration.


// Asynchronous programming =>

// Asynchronous programming allows tasks to run independently, enabling multiple tasks to be processed 
// at the same time without blocking the main execution thread. Unlike synchronous operations, asynchronous 
// tasks run independently, allowing other operations to continue without being blocked. Tasks that are not 
// dependent on others can be offloaded and executed at the same time as the main operation and then report 
// back the result when they are done. 


// difference between setInterval and setTimeout =>
// setTimeout executes the code only once after the specified delay, while setInterval executes the code 
// repeatedly at the specified interval.


// setTimeout ------> setTimeout is not the part of js it is provided by browser and it does not block the code.
// hey.......
// bye.......
// I am running
// console.log("hey.......");
// const am = () => {
//     console.log("I am running");
// }
// setTimeout(am  , 2000);
// console.log("bye.......");


// another option to write setTimeout function          
// listening......
// Ending......
// I am running on my path.......
// console.log("listening......")
// setTimeout(() =>{
//     console.log("I am running on my path.......");
// }, 1000);
// console.log("Ending......")

// End result
// hey.......
// bye.......
// listening......
// Ending......
// I am running on my path.......
// I am running




// setTimeout --------> if 0 ms time in setTimeout still it will run after for and last console
// sun
// I am loop 99 times
// End is new Beginning
// inside setTimeout
// process ----> 1st console-execute 2nd timeout gone to the browser for hold 0 sec.... until then js move to for loop
// so setTimeout stay in callsatck queue then first for loop execute and last console.log will execute afterwards in 
// last setTimeout will execute. 

// console.log("sun"); 

// setTimeout(() =>{
//     console.log("inside setTimeout");
// }, 0);

// for(let i = 1; i < 100; i++ ){
//     console.log("I am loop");
// }

// console.log("End is new Beginning");



// clearTimeout - clearTimeout is used to stop setTimeout function
// console.log("sun"); 

// const id = setTimeout(() =>{
//     console.log("inside setTimeout");
// }, 0);

// for(let i = 1; i < 10; i++ ){
//     console.log("I am loop");
// }
// console.log("here is the id", id)
// clearTimeout(id);
// console.log("End is new Beginning");





// setInterval - setInterval executes the code repeatedly at the specified interval.
// console.log("buddy");
// const edit = setInterval(() =>{
//     console.log(Math.random());
// }, 1000);
// console.log("How you doing?");





// CallBack Function - A JavaScript callback is a function which is to be executed after another function has finished execution. 
// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
// callbacks function - mostly used in asynchronous programming 

function myFunc(callback){
    console.log("function is working");
    callback();
}
function myFunc_2(){
    console.log("function is working using callback");
}
// option 1 normal call 
// myFunc();
// myFunc_2();

// option 2 call using callback function
myFunc(myFunc_2)



// another way of callback function
function fight(back){
    console.log("doing");
    back();
}

fight(function(){
    console.log("fighting");
})



// get two numbers
function getTwoNumbers(num1, num2, callback){
    console.log(num1, num2);
    callback(num1, num2);
}
function addTwoNumbers(numb1, numb2){
    console.log(numb1 + numb2);
}
getTwoNumbers(4, 6, addTwoNumbers);




// in condition callback function 
function getTwoNumbersHere(number1, number2, callback){
    if(typeof number1 === "number" && typeof number2 === "number"){
        callback(num1, num2);
    }
    else{
        console.log("wrong data type")
    }
}

function addTwoNumbersHere(numb_1, numb_2){
    console.log(numb_1 + numb_2);
}

getTwoNumbersHere("4", "6", addTwoNumbersHere);





// in condition with direct option 

function getTwoNumbersHer(number1, number2, callback){
    if(typeof number1 === "number" && typeof number2 === "number"){
        callback(num1, num2);
    }
    else{
        console.log("wrong data type")
    }
}

getTwoNumbersHer(5, 6, function(num1, num2){
    console.log(num1 + num2);
});




// with conditions error handling
function getTwo(number1, number2, onsuccess , onfail){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onsuccess(number1, number2);
    }
    else{
        onfail();    
    }
}

getTwo("4", "6", (num1, num2)=>{
    console.log(num1 + num2);
}, ()=>{
    console.log("please type or pass correct data type");
});





