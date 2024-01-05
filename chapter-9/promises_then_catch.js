// promise contains two properties ------> state and result and you cannot change them directly
// where initially state is pending and when resolve state either fulfilled or rejected
// result of fulfillment can be two type either fulfil or reject (error)


// let promise = new Promise (function(resolve, reject){
//     alert("hello");
//     resolve(66)
// })

// console.log("hello");
// setTimeout(function(){
//     console.log("c seconds")
// , 3000})
// console.log(promise);



// why promise use in js : promises used for parallel execution
// usage of then and catch  

// let p1 = new Promise ((resolve , reject) =>{
//     console.log("this is pending");
//     setTimeout(() =>{
//         console.log("I'm promise and I'm fulfilled")
//         resolve(true)
//     },4000);
// })

// let p2 = new Promise ((resolve , reject) =>{
//     console.log("this is pending");
//     setTimeout(() =>{
//         console.log("I'm promise and I'm rejected")
//         reject(new Error("I am an ERROR"));
//     },4000);
// })
// console.log(p1,p2);



// catch and then
// let p1 = new Promise ((resolve , reject) =>{
//     console.log("this is pending");
//     setTimeout(() =>{
//         // console.log("I'm promise and I'm fulfilled")
//         resolve(true)
//     },4000);
// })
    
// let p2 = new Promise ((resolve , reject) =>{
//     console.log("this is pending");
//     setTimeout(() =>{
//         // console.log("I'm promise and I'm rejected")
//         reject(new Error("I am an ERROR"));
//     },4000);
// })

// p1.then((value ) =>{
//     console.log(value);
// })

// p2.then((value) =>{
//     console.log(value);
// })

// instead of if you don't want to show error you can use catch
// p2.catch((error) =>{
//     console.log("error occured in p2");
// })

// p2.then((value) =>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })