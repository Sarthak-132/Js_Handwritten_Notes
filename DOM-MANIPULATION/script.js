//  to change type of input 

const input = document.querySelectorAll(".input");
console.log(input);

input.foreach((item,index=>{
    // console.log("item", item.type);
    // console.log("index", index);

    item.type == "text" ? item.type = "email" : item;


})
console.log(input))


// create new element in html using javaScript



// card js




// onclick replace the code

const container = document.querySelector(".container");
// console.log(container); 
// console.log(container.children); 


const children = container.children;
// console.log(children); 

function changeContent() {
    for (let i = 0; i < children.length; i++) {
        const heading = children[i];
        // console.log(child);
        heading.style.color = "red";
        heading.innerText = "hmmmmmm";
    }
}


