// how to remove and add classes in html using js

// const section_todo = document.querySelector(".todo-section");
// console.log(section_todo);
// console.log(section_todo.classList);


// section_todo.classList.remove("container"); 


// innerHTML to add element 
// const todo_list = document.querySelector(".todo-list");
// console.log(todo_list.innerHTML);
// todo_list.innerHTML += "<li> New Todo</li>"
// todo_list.innerHTML = todo_list.innerHTML + "<li> more Todo item</li>"


// when should use this and when should not use this +=innerHTML or = todo_list.innerHTML + "<li> more Todo item</li>"
// when we have to use...... remove something totally and add instead of add something but when add new item directly then donot use it
// document.createElement()
// append - add element in the last 
// prepend - add element in the first
// remove - to remove element

// document.createElement()
// const newTodoLi = document.createElement("li");
// const newTodoLiText = document.createTextNode("teaching something new");  //or
// // newTodoLi.textContent = "teaching something new";
// const todoListing = document.querySelector(".todo-list");  // .todo-list in the list of li

// newTodoLi.append(newTodoLiText);         //appendchild or append
// todoListing.append(newTodoLi)
// console.log(newTodoLi);
// console.log(newTodoLiText);


// .todo-list before ul add or after ul add(before and after)
// before 
// after
// const newTodoLi = document.createElement("li");
// const newTodoLiText = document.createTextNode("teaching something new");
// const todoListing = document.querySelector(".todo-list");

// newTodoLi.appendChild(newTodoLiText);
// todoListing.before(newTodoLi);



// elem.insertAdjacentHTML (where , html)
// beforebegin - before ul starting
// afterbegin - ul after 1st no. of li
// beforeend - ul after last no. of li(just before end)
// afterend - after end of ul
// const todoListing = document.querySelector(".todo-list");
// todoListing.insertAdjacentHTML("beforeend", "<li> New Todosssss</li>");



// clone nodes
// const todoListing = document.querySelector(".todo-list");
// const li = document.querySelector("li");
// li.textContent = "Hello";
// between append and prepend only one will execute beacause it is applied on same property 
// todoListing.append(li);     // add at last no. of list
// todoListing.prepend(li);    // add first no. at list 

// using clone nodes to apply both methods
// const liTwo = li.cloneNode(true);
// todoListing.append(li);
// todoListing.prepend(li2);


// some other old methods to support Internet explorer it doesn't support some methods of previous
// appendchild
// insertBefore - insert before something
// replaceChild - same as insertBefore
// removeChild - remove Element

// const todoListing = document.querySelector(".todo-list");
// const list = document.createElement("li");
// const referenceNode = document.querySelector(".listed");

// list.textContent = "I'm todo";
// todoListing.insertBefore(list, referenceNode); //(insert karna hai, jiske pahle insert krna hai)



// static list and live list

// static list
// const unorderedList = document.querySelectorAll(".todo-list li");
// console.log(unorderedList);                   //Nodelist(6) item(6)
// const newLi = document.createElement("li");
// newLi.textContent = "New item";
// console.log(unorderedList);                    //Nodelist(6) item(6)
// const adding = document.querySelector(".todo-list");
// adding.append(newLi);
// console.log(unorderedList);                     //Nodelist(6) item(7)

// live list 
// const ul = document.querySelector(".todo-list");
// const listItem = ul.getElementsByTagName("li"); //only giving li's of ul //live list - htmlCollection
// const newLi = document.createElement("li");
// newLi.textContent = "New item";
// ul.append(newLi);
// console.log(listItem);                    // htmlcollection(7) - item (7)



//  how to get the dimensions of the element
// getBoundingClientRect();