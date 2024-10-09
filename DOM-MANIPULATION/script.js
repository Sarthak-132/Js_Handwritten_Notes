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

