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


// get multiple elements using getElementsByClassName - gives htmlcollection (expect forEach...can be possible after converting it into array)
// get multiple elements using querySelectorAll - gives nodelist (all loops used)

// getElementsByClassNam - can not iterate html collection through forEach method instead use (for , for of)
let navItems = document.getElementsByClassName("nav-items");
console.log(navItems);       //these are array like objects -> html collection
// so limited methods are available not all the array methods can be used
// array like objects - indexing , length property , 
console.log(navItems[1]);
console.log(typeof navItems); // object

// we can use forEach method for html collection using convert collection to array then forEach method
// let nav = Array.from(navItems);
// console.log(Array.isArray(nav));

// navItems.forEach((item) => {
//     item.style.color = "black";
// }) 

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
    value.style.fontWeight = "bold";
}



//  to use all the array method we have to convert htmlcollection or nodelist into array
// const navItems3 = document.getElementsByTagName("a");
// navItems = Array.from(navItems);


// innerHTML
const heads = document.querySelectorAll(".header");
// console.log(heads.innerHTML);
heads.innerHTML = "<h1>Hello bhai</h1>"     //when you want to add more html with this
heads.innerHTML += "<button class=\"btn\">click me</button>"
console.log(heads.innerHTML);



// RootNode of html access
const root = document.getRootNode();
// console.log(root);
console.log(root.childNodes);

const htmlElement = root.childNodes[0];
console.log(htmlElement);
console.log(htmlElement.childNodes);


const headNode = htmlElement.childNodes[0];
const textNode = htmlElement.childNodes[1];
const bodyElemNode = htmlElement.childNodes[2];
// console.log(headNode); 
// console.log(headNode.parentNode);
// console.log(textNode);
// console.log(bodyElemNode);

// sibling relation
// console.log(headNode.nextSibling);              //#text   
// console.log(headNode.nextSibling.nextSibling);  //<body>...</body> 

// browser don't take white space as sibling, children and parent.... browser set them as normal.
// direct sibling can get by nextElementSibling - get direct body element


// parent of parent targeting same as nextSibling (parentNode)

const body = document.body
// console.log(body); 

const headTag = document.querySelector("head");
const title = headTag.querySelector("title");
console.log(title);

const container = document.querySelecetor(".container");
console.log(container.childNodes);
console.log(container.children);


