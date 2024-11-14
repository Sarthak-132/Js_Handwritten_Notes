const todoForm = document.querySelector(".form-todo");
const inputText = document.querySelector(".form-todo input[type=\"text\"]")
const pushingLi = document.querySelector(".todo-list")

todoForm.addEventListener("submit" , (e) => {
    e.preventDefault();               // it stops refresh the page on submit
    const inputValue = inputText.value;
    const newLi = document.createElement("li");
    const newLiText = `<span class="text">${inputValue}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`
    newLi.innerHTML =  newLiText;
    pushingLi.append(newLi);
    inputText.value = "";
})


pushingLi.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("remove")){
        const targetLi = e.target.parentNode.parentNode;
        console.log(targetLi);
        targetLi.remove();
    }
    else if(e.target.classList.contains("done")){
        const done = e.target.parentNode.previousElementSibling;
        done.style.textDecoration = "line-through";
    }
})