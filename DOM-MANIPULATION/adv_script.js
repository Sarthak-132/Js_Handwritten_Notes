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

// getElementsByClassNam - can not iterate html collection through forEach method instead use (for , for of)
const navItems = document.getElementsByClassName("nav-items");
console.log(navItems);       //these are array like objects -> html collection
// so limited methods are available not all the array methods can be used
// array like objects - indexing , length property , 
console.log(navItems[1]);
console.log(typeof navItems); // object

// querySelectorAll
const navItems2 = document.querySelectorAll(".nav-items");
console.log(navItems2);         //Nodelist 
console.log(navItems2[2]); 
console.log(typeof navItems2);  // object-> 


// loop using
// getElementsByTagName
const navItems3 = document.getElementsByTagName("a");
for(let i = 0 ; i < navItems3.length ; i++){
    const value = navItems3[i]; 
    value.style.backgroundColor = "#fff";
    value.style.color = "#000";
}
