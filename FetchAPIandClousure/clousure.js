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