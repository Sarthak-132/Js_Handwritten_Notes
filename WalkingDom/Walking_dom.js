console.log(document.body.firstChild)
console.log(document.body.lastChild)
// console.log(document.body.ChildNodes)

// to convert child nodes into Array
// because it is not a array ((childNodes))
let arr = Array.from(document.body.childNodes)
console.log(arr);

// parent and sibling of elements
// DOM collections are read only

// Use always .firstELementChild

// Table Navigation 

// Searching the DOM 
let title = document.getElementByClassName("card-title")[0]
title.style.color = 'red';   // to change color by js

// elem.matches......elem.closest.....elem.contains
let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".container"));  //false returns if id class isn't present
console.log(id1.matches("card-title"));  //true returns if id class is present

// suppose in div present ul then li and a tag it target the closest element
console.log(sp1.closest("#sp1"))
console.log(sp1.contains("#sp1"))
console.log(id1.contains("#sp1"))





