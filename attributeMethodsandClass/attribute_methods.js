// to get website in text
// console.log(document.body.textContent);

// hasAttribute and getAttribute

let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// setAttribute
first.setAttribute("hidden", "true");

// removeAttribute
first.removeAttribute("class");



// lecture - 43 Insertion method of HTML

let b = dcment.getElementsByTagName("div")[0];
// b.innerHTML = a.innerHTML + "<h1>Hello</h1>";

let div = document.createElement("div");
div.innerHTML = "<h1>Hello</h1>";
// b.appendChild(div);
// b.prepend(div)
// b.before(div);
// b.after(div);
// b.replaceWith(div);



// lecture - 44 InsertionAdjacent HTML/TEXT method of HTML
first.insertAdjacentHTML('beforebegin', 
"<div class='test>beforebegin</div>");

first.insertAdjacentHTML('beforeend', 
"<div class='test>beforeend</div>");

first.insertAdjacentHTML('afterbegin', 
"<div class='test>afterbegin</div>");

first.insertAdjacentHTML('Afterbegin', 
"<div class='test>Afterbegin</div>");

first.remove();


