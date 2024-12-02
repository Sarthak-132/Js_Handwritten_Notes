class Employee{
    // here constructor will run surely while we are running programmer in the below if pass argument even then it will run
    constructor(name){
        console.log(`${name} Employee's constructor is here`);
    }
    login(){
        console.log(`Employee logged in`);
    }
    logOut(){
        console.log(`Employee logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

// we are also create a constructor here if we want personal constructor for Programmer function below
class Programmer extends Employee{
    requestCoffee(){
        console.log(`Employee has requested ${x} coffees`)
    }
    
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log('One extra leave is granted');
    }
}

// new Employee will give same result bcz it extends from Employee
let e = new Programmer('larry')     
e.login()
e.requestLeaves(3)

