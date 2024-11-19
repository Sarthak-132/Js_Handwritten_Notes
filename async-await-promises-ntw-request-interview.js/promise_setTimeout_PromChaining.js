// Promise && setTimeout 

// I want to resolve or reject the promise after 2 seconds

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})




// promise resolve(Promise.resolve) and promise chaining 

// Note - then() method always returns promise. 
// const myProm = Promise.resolve(5);
// // myProm.resolve(5).then((val)=>{
// Promise.resolve(5).then((val)=>{
//     console.log(val);
// })



// promise chaining
// function dutyHim(){
//     return new Promise((resolve, reject)=>{
//         resolve("hehey aaeeee ");
//     })
// }

// dutyHim().then((val)=>{ // (val=>{}  like that also we can write
//     console.log(val);   // woah       
//     val += "aeee hooo... ooooo ";
//     return val;         // here .then() returning promise like that Promise.resolve(val);
//                         // if we don't return here anything so it will return undefined
// }).then((val)=>{
//     console.log(val);   // woahooo
//     val += "('aaha aaha aaha2x') hooo ooo ooo oo....";
//     return val;
// }).then(atif=>{
//     console.log(atif);
// })





// Using Promise instead of callbacks
 
// const head1 = document.querySelector(".heading1");
// const head2 = document.querySelector(".heading2");
// const head3 = document.querySelector(".heading3");
// const head4 = document.querySelector(".heading4");
// const head5 = document.querySelector(".heading5");
// const head6 = document.querySelector(".heading6");
// const head7 = document.querySelector(".heading7");
// const head8 = document.querySelector(".heading8");
// const head9 = document.querySelector(".heading9");

// function changeText(elem, text, rgb, time, onsuccess, onfailure){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(elem){
//                 elem.textContent = text;
//                 elem.style.color = rgb;
//                 // onsuccess() - do not do like that
//                 resolve("now see it");   // if we don't write here anything it will give undefined 
//             }
//                 else{
//                     reject("elem not found")
//                 }
//         }, time)
//     })
// }


// we can store it in the variable also
// changeText(head1, "Arin", "red", 1000)
//     .then(()=>{
//         return changeText(head2, "brin", "blue", 1000)      // without return all the execution will run simultaneously
//     })
//     .then(()=>{
//         return changeText(head3, "crin", "grey", 1000)
//     })
//     .then(()=>{
//         return changeText(head4, "drin", "pink", 1000)
//     })


// or 
// changeText(head1, "Arin", "red", 1000)
// .then(()=>changeText(head1, "Arin", "blue", 1000))
// .then(()=>changeText(head2, "brin", "green", 1000))
// .then(()=>changeText(head3, "crin", "red", 1000))
// .then(()=>changeText(head4, "drin", "violet", 1000))
// .then(()=>changeText(head5, "erin", "cyan", 1000))










//  for error found in Promise
const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");
const head8 = document.querySelector(".heading8");
const head9 = document.querySelector(".heading9");

function changeText(elem, text, rgb, time, onsuccess, onfailure){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(elem){
                elem.textContent = text;
                elem.style.color = rgb;
                // onsuccess() - do not do like that
                resolve("now see it");   // if we don't write here anything it will give undefined 
            }
                else{
                    reject("elem not found")
                }
        }, time)
    })
}

changeText(head1, "Arin", "red", 1000)
.then(()=>changeText(head1, "Arin", "blue", 1000))
.then(()=>changeText(head2, "brin", "green", 1000))
.then(()=>changeText(head3, "crin", "red", 1000))
.then(()=>changeText(head4, "drin", "violet", 1000))
.then(()=>changeText(head5, "erin", "cyan", 1000))
.catch((error)=>{
    alert(error);
})