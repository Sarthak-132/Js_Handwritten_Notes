let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" I'm fulfilled in 1 seconds") 
        resolve(66)
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" I'm fulfilled in 2 seconds") 
        reject(new Error("error occured"))
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(" I'm fulfilled in 3 seconds") 
        resolve(68)
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })


// let promise_all = Promise.all([p1,p2,p3]); //if anyone is rejected it will not executed so you can use allSNettled
// let promise_all = Promise.allSettled([p1,p2,p3]);   //gives all the promises if they rejected then it place error 
// let promise_all = Promise.race([p1,p2,p3]);   //wait for first promise to settle returns error 
// let promise_all = Promise.any([p1,p2,p3]); //wait for first promise to fulfil returns aggregate error if yet rejected all
// let promise_all = Promise.resolve(6
let promise_all = Promise.reject(new error("error occured"));
promise_all.then((value)=>{
    console.log('done');
})