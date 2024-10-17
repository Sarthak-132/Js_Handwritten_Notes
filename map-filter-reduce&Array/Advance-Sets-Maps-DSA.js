// iterables - on which we can apply for of loop
// string and array are iterables and objects are not
// string

const name = "Harsh";
for ( let boy of name){
    console.log(boy);
}



// Array
const arr = [1,2,3,4,5];
for ( let bay of arr){
    console.log(bay);
}



// object : are not iterable (TypeError: users is not iterable)
// const users = {
//     name : "harsh",
//     age : 20,
//     section : "D",
// }
// for ( let user of users){
//     console.log(user);
// }



// array like objects 
// Those which have length property
// that can access by access like - string


// set (They are also Iterables) - like array but it is different    (generally used for unique values)                
// store data
// sets also have its own methods
// no index based access
// order is not guaranteed
// unique items only (no duplicates allow)

const something = [34,45,"itemAge"];
const numbers = new Set([1,2,3,4,5]);
console.log(numbers);

const num = new Set();
num.add(1);
num.add(2);
num.add(1);             // it will not add again but in array of same elements are their then it will add as new array it take it
num.add(["ages-1", "ages-2"]);
num.add(["ages-1", "ages-2"]);
num.add(something);
num.add(something);      // here also deny..... it will not add again
console.log(num);


// Methods
// has 
if(num.has(1)){
    console.log("Yes");
}
else{
    console.log("No");
}

 

// when unique elements need from array 
const myArm = [1,2,3,4,5,6,7,8,9,3,4,5,2,6,8,4];
const uniqueElem = new Set(myArm);                  //set will extract new array and previous will be as well as 
console.log(uniqueElem);

let length = 0;
for(let i of uniqueElem){
    length++;
}
console.log(length);



// MAP METHOD - map is iterable
// stored data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// difference between map and object
// object can have only string or symbol as key 
// in map we can use anything as key
// like - array, number, String 

// Key value pair like object
const Persons = new Map();
Persons.set("name", "Harrish");
Persons.set("age", 21);
Persons.set(1, "one");
Persons.set([1,2,3,4], "Array");
console.log(Persons);
// console.log(Persons.name);      // this will give undefined in map
// console.log(Persons['name']);   // this will give undefined in map

// Methods 
console.log(Persons.get("name"));
console.log(Persons.keys());

for(let key of Persons.keys()){
    console.log(key, typeof key);
}

for(let key of Persons){
    console.log(typeof key);
    console.log(Array.isArray(key));
}

for(let [key, value] of Persons){         // need to destructure like that
    console.log(typeof value);
}



// in map array in array
const arrayIn = new Map([['we','centre'],['you','desktop'],['me','laptop']]);
console.log(arrayIn);


// suppose we have object and we want to add additional things in that object using Map 

const obj = {
    id : 1,
    fname : "harsha",
}
const obj2 = {
    id : 1,
    fname : "harsha",
}

const userInfo = new Map();
userInfo.set(obj, {age: 8, gender:"male"});
userInfo.set(obj2, {age: 12, gender:"female"});
console.log(userInfo);
console.log(obj.id);
console.log(userInfo.get(obj));
console.log(userInfo.get(obj).age); 
console.log(userInfo.get(obj2).age); 



// clone using object

const object = {
    key1 : "val1",
    key2 : "val2",
}
const object2 = object;
object.key3 = "val3";

console.log(object);       // { key1: 'val1', key2: 'val2' }
console.log(object2);      // { key1: 'val1', key2: 'val2' }


// otherswise do this if want new object using cloning
// const object3 = Object.assign({}, object);         or
const object3 = {...object};
object.key4 = "val4";
console.log(object);       // { key1: 'val1', key2: 'val2' }
console.log(object3); 





// optional chaining

const device = {
    fname : "harsha",
    address : {house : "1234"}
}
console.log(device.fname);
console.log(device.address.house);


// we dont have some key and we access them like
// console.log(device.age.number);             // this will give an error can not read property "number" of undefined
console.log(device.age?.number);             // undefined print if use ? (if user exist then outout otherwise undefined)
console.log(device?.age?.number);             // undefined print if use ? (if user exist then outout otherwise undefined)
console.log(device.age);                       // undefined

