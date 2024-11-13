// console.log("hello");

// one button target
// const firstBtn = document.querySelector("#one");
// firstBtn.addEventListener("click" , function(){
//     console.log("clicked");
// })


// targetting multiple buttons
// const allBtn = document.querySelectorAll(".my-buttons button");   // or only .my-buttons
// console.log(allBtn);

// for of
// for(let btnTarget of allBtn){
//     btnTarget.addEventListener("click" , function(){
//         console.log("i'm here");
//         console.log(this);       
//     })
// }

// for 
// for(let i =0 ; i < allBtn.length ; i++){
//     allBtn[i].addEventListener("click" , function(){
//         console.log("i'm here");
//         console.log(this);       
//     })
// }

// forEach 
// allBtn.forEach((btnTarget)=>{
//     btnTarget.addEventListener("click" , function(){
//         console.log("i'm here");
//         console.log(this);       
//     })
// })



// Events object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click" , function(e){     // to get the information write (e/event)
//     console.log(e);                                     // PointerEvent object information
//     console.log(e.target);   //or currentTarget         // like this give it element
//     console.log(this);
// })



// console.log("Script Start");
// const allBtn = document.querySelectorAll(".my-buttons button");
// console.log(allBtn);

// allBtn.forEach((btn) =>{
//     btn.addEventListener("click" , (e)=>{
//         // console.log(e.target);
//         let num = 0;
//         for(let i = 0 ; i < 1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent , num);           // use here (target/currentTarget) 
//     })
// })

// let outer = 0;
// for(let i = 0; i <= 10000000; i++){
//     outer += i;
// }
// console.log("value of outer is " , outer);
// console.log("Script End");



// practice with click event
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        // console.log(e.currentTarget);
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
        document.body.style.backgroundColor = "blue";
    })
})