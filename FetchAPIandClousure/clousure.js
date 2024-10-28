const first_function = () =>{
    
    var browse = "'mozzila'";
    const display = () =>{
        console.log(browse);
    }
    return display();
}
first_function();

// A closure is the combination of a function bundled together (enclosed) with references to 
// its surrounding state (the lexical environment). In other words, a closure gives a function 
// access to its outer scope. In JavaScript, closures are created every time a function is created, 
// at function creation time.

// if variables are declared in it's lexical environment then it is call otherwise it will gives access denied.
// like if mozilla out of it's function then it will not call




// closures in JS 

// Example - 1
function printFullName (fName , lName){
    function printName(){
        console.log(fName, lName);
    }
    return printName;
}

const ans = printFullName("harshit" , "sharma");
console.log(ans());



// Example - 2
function hello(exe){
    const a = "varA"
    const b = "varB"
    return function (){
        console.log(a, b, exe);
    }
}

const res = hello("arg");
res();




//  Example - 3
// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// } 

// or 

// const myFunction = (power) => {
//     return (number) => number ** power; 
// } 

// or

const myFunction = power => number => number ** power; 

const one = myFunction(2);
const two = one(2);
console.log(two);

const three = myFunction(3);
const four = three(2);
console.log(four);





// example - 3

const call = () => {
    let count = 0;
    return fun = () => {
        if(count < 1){
            console.log("Hi , you called me!");
            count++;
        }
        else{
            console.log("already run");
        }
    }
}

const funCall = call();
funCall();
funCall();
funCall();