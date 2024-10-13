// object destrucituring

const obj = {
    name: "Harrish",
    age: 21,
    section: "A",
    minority: "true",
    country: "India",
}

// const value_1 = obj.name; 
// const value_2 = obj.age; 

// console.log(value_1, value_2)



// Another idea to do this in better way 

const { name, age, section } = obj; 
// if it is declare then console.log(age); prints age value otherwise in line no.23 will not run as console.log(age);

// console.log(name, age, section);

const { name: name_1, age : age_1, section : section_1 , ...resp} = obj;
console.log(name_1);
console.log(age);
console.log(resp);





//  array destructuring

const we = [..."adbjkg"];
console.log(we);            // [ 'a', 'd', 'b', 'j', 'k', 'g' ]



// Destructuring object inside array 

const array = [
    {userId : 1 , FirstName : "Harrish" , gender: "male"},
    {userId : 2 , FirstName : "Rajesh" , gender: "male"},
    {userId : 3 , FirstName : "Priya" , gender: "female"},
    {userId : 4 , FirstName : "Satish" , gender: "male"},
]

console.log(array);

for ( let user of array){
    console.log(user);
    console.log(user.userId, user.FirstName, user.gender);
}


// Nested Destructuring 

const userArray = [
    {userId : 1 , FirstName : "Harish" , gender: "male"},
    {userId : 2 , FirstName : "Raj" , gender: "male"},
    {userId : 3 , FirstName : "Priyanshi" , gender: "female"},
    {userId : 4 , FirstName : "Siya" , gender: "female"},
]

const [user1, user2, user3, user4] = userArray;
console.log(user1, user2, user3, user4);



// suppose i need user1 firsname and user3 gender then

const [{FirstName}, , {gender}, ] = userArray;   // here index1 , index2 , index3 , index4 like that working
console.log(FirstName, gender);

// if want to change the name then in this case
const [{},{userId:id} , {gender:sex}, ] = userArray;   // here index1 , index2 , index3 , index4 like that working
console.log(id, sex);

