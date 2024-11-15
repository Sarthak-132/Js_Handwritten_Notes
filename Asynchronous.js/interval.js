// using setIntervalchanging the background color of the body of html 

// const body = document.body;
// const btn = document.querySelector("button");

// btn.addEventListener("click" , changeColor = () =>{
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     body.style.backgroundColor = rgb;
// })

// setInterval(changeColor , 1000);




// Another type of solution
const body = document.body;
setInterval(()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = rgb;
}, 1000);
