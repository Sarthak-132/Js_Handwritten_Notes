//  proto , prototype , class

const user_1 = {
    firstName : "Aditya",
    lastName : "Jhariya",
    email : "aditya@j.com",
    age : 23,
    address : "house number , colony , pincode , state",
    // two methods
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18(){
        return this.age >= 18
    }
}




//  function (that create object)
//  add key value pair
//  object returns

function createUser(firstName , lastName , email , age , address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    user.is18 = function(){
        return this.age >= 18
    }
    return user;
}


