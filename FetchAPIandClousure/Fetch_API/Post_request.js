// // fetch API Post Request 
// const createTodo = async () => {
    
// let options = {
//     method: 'POST',
//     headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//     title: 'Sarthak',
//     body: 'DIvoNe',
//     userId: 153,
//     }),
// }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () =>{
//     let todo = await createTodo();
//     console.log(todo);
// }

// mainFunc();




// // Another way to fetch API with pass todosecond data
// const createTodo = async (todosecond) => {
    
// let options = {
//     method: 'POST',
//     headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(todosecond),
// }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () =>{
//     let todosecond = {
//         title : 'Karry',
//         body : 'net',
//         UserId : '409',
//     }
//     let todo = await createTodo(todosecond);
//     console.log(todo);
// }

// mainFunc();











// both GET and POST request
const createTodo = async (todosecond) => {
    
let options = {
    method: 'POST',
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todosecond),
}
    
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
    // 'https://jsonplaceholder.typicode.com/posts/1' it was but because we use id remove 1
    let r = await response.json()
    return r;
}

const mainFunc = async () =>{
    let todosecond = {
        title : 'Karry',
        body : 'net',
        userId : '409',
    }
    let todo = await createTodo(todosecond);
    console.log(todo);
    console.log(await getTodo(34));  //change pass valueN
}

mainFunc();