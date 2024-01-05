let p1 = new Promise((resolve,reject) =>{
    console.log("Hello");
    setTimeout(()=>{
        resolve(1);
    },1700);
})

p1.then(() => {
    console.log("Congrats resolves");
})

p1.then(() => {
    alert("Congrats")
})