// keypress event

const body = document.body;

body.addEventListener("keypress", (e) => {
    // console.log(e);               // whatever key i press will show in console
    console.log(e.key);              // whatever key i press will show in console
})


// mouse event 

const btnClick = document.querySelector(".btn-headline");

btnClick.addEventListener("mouseover" , () =>{
    console.log("Hey! I am mouseover");
})

btnClick.addEventListener("mouseleave" , () =>{
    console.log("Hey! I am mouseleave");
})



