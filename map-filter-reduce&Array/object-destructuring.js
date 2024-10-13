// object destrucituring

const obj = {
    name: "Harrish",
    age: 21,
    section: "A"
}

// const value_1 = obj.name; 
// const value_2 = obj.age; 

// console.log(value_1, value_2)



// other idea to do this in better way 

const { name, age, section } = obj;
console.log(name, age, section);

