let p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("I'm promise and I'm fulfilled in 2 seconds")
        resolve(45)
    },2000)
})

p1.then((value) =>{
    console.log(value);
    let p2 = new Promise((resolve,reject) =>{  //return new promise
        setTimeout(()=>{
            console.log("I'm promise and I'm fulfilled in 3 seconds")
            resolve(37)
        },3000)
    }).then((value) =>{
        console.log("we're done");
    })
})










// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve("done")
//         }
//         script.onerror = () => {
//             reject("error")
//         }
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value) => {
//     console.log(value);
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// }).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log("something went wrong");
// }).catch((error) =>{
//     console.log("we have error sorry for the troble");
// })