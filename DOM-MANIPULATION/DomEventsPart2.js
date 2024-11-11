console.log("hello");

// one button target
const firstBtn = document.querySelector("#one");
firstBtn.addEventListener("click" , function(){
    console.log("clicked");
})


// targetting multiple buttons
const allBtn = document.querySelectorAll(".my-buttons button");   // or only .my-buttons
console.log(allBtn);

// for(let btnTarget of allBtn){
//     btnTarget.addEventListener("click" , function(){
//         console.log("i'm here");
//         console.log(this);       
//     })
// }

// or 
for(let i =0 ; i < allBtn.length ; i++){
    allBtn[i].addEventListener("click" , function(){
        console.log("i'm here");
        console.log(this);       
    })
}