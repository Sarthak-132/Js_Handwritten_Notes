// class Employee{
//     login(){
//         console.log(`Employee logged in`);
//     }
//     logOut(){
//         console.log(`Employee logged out`);
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`);
//     }
// }

// class Programmer extends Employee{
//     requestCoffee(){
//         console.log(`Employe has requested ${x} coffees`)
//     }
    
// }

// let e = new Programmer()  // new Employee  will give same result bcz it extends from Employee
// e.login()
// e.requestLeaves(3)





// class Employee{
//     login(){
//         console.log(`Employee logged in`);
//     }
//     logOut(){
//         console.log(`Employee logged out`);
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`);
//     }
// }

// class Programmer extends Employee{
//     requestCoffee(){
//         console.log(`Employe has requested ${x} coffees`)
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves + 1} leaves (one extra day)`);
//     }
    
// }

// let e = new Programmer()  // new Employee  will give same result bcz it extends from Employee
// e.login()
// e.requestLeaves(3)











class Employee{
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

class Programmer extends Employee{
    requestCoffee(){
        console.log(`Employe has requested ${x} coffees`)
    }
    
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log('One extra leave is granted');
    }
    
}

let e = new Programmer()  // new Employee  will give same result bcz it extends from Employee
e.login()
e.requestLeaves(3)