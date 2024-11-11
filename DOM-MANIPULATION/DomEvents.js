// DOM EVENTS


// intro to events
// click ( total 3 ways to add event)
// 1. onclick in html.....
// onclick = "console.log('clicked')"

// 2. targetting html......
// const btn = document.querySelector('.btn-headline')
// console.log(btn);      // it will button as html element
// console.dir(btn);      // it will show it as object 
// btn.onclick = function(){
//     console.log('clicked me'); 
// }

// this both way are good but not efficient because click can't be assign more than one time


// 3. methods to add event
const btn = document.querySelector('.btn-headline');
btn.addEventListener("click" , function(){
    console.log('clicked by func');
    console.log(this);   // here value of this is btn but in arrow fucntion it is window object
})



