// change text 
// textContent and innerText    

const heading = document.getElementById("heading");
console.log(heading.textContent);
heading.textContent = "Manage";
console.log(heading.textContent);


// to target particular element in html and style them

const logo = document.querySelector("header nav h1");
console.log(logo);
logo.style.backgroundColor = "red";
 


// get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com");

const inputElem = document.querySelector(".form-todo input");
console.log(inputElem);
console.log(inputElem.getAttribute("type"));


// get multiple elements using getElementsByClassName
// get multiple elements using querySelectorAll