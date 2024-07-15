// let a = { 
//     name : " Harry ",
//     language : "JavaScript",
// }
// console.log(a);

// let p = {
//     run: () =>{
//         alert('run');    //this run will run
//     }
// }
// a.__proto__ = p
// a.run();





// let a = { 
//     name : " Harry ",
//     language : "JavaScript",
//     run: () =>{
//         alert('i\'m run');   //if already here then it will run
//     }
// }
// console.log(a);

// let p = {
//     run: () =>{
//         alert('run');
//     }
// }
// a.__proto__ = p
// a.run();






let a = { 
    name : " Harry ",
    language : "JavaScript",
    run: () =>{
        alert('i\'m run');   // if already here then it will run
    }
}
console.log(a);

let p = {
    run: () =>{
        alert('run');
    }
}

p.__proto__ = {
    naming: 'jakie'        
}

//jakie also print because in a prototye naming is not present than it fetch jakie in p it doesn't got it in the end it find it in p.__proto__

a.__proto__ = p
a.run();
console.log(a.naming);