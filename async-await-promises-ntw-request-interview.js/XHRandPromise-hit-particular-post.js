// hitting particular post in XHR 

// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);

// xhr.onload = () =>{

//     // for successful or not status code 
    
//     if(xhr.status >= 200 && xhr.status < 300){

//         const response = xhr.response;
    
//         const data = JSON.parse(response);
    
//         // console.log(data);

//         // hitting particular post from all the posts

//             const id = data[5].id;

//             const xhr2 = new XMLHttpRequest();

//             const URL2 = `${URL}/${id}`;

//             // console.log(URL2);

//             xhr2.open("GET", URL2);

//             xhr2.onload = () =>{

//                 const data2 = JSON.parse(xhr2.response)

//                 console.log(data2);
//             }

//             xhr2.send();

//     }

//     else {

//         console.log("Something went wrong");

//     }


// }

// // Server ERROR hnadling propery (500 - internal server error{backend})

// // this will work only when network error occur

// xhr.onerror = () => {

//     console.log("netwrok error");

// }

// xhr.send()









// this code promisefy it means full code written in Promise without using callback hell

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){

    return new Promise(function (resolve , reject){

        const xhr = new XMLHttpRequest();

        xhr.open(method , url);

        xhr.onload = function() {
            
            if(xhr.status >= 200 && xhr.status < 300){

                resolve(xhr.resposne);

            }

            else{

                reject(new Error("Something went wrong"));

            }
   
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();

    }) 

}

// const request = sendRequest("GET" , URL);
// console.log(request);

sendRequest("GET" , URL)
    .then((response)=>{

        // console.log(response);

        const response= xhr.response ;

        const data = JSON.parse(response);

        // console.log(data);

        return data;

    }).then((data)=>{
        // console.log(data);

        const id = data[4].id;

        return id;

    }).then((id)=>{
        // console.log(id);

        const url = `${URL}/${id}`;

        return sendRequest("GET" , url);

    }).then((newResponse)=>{
        // console.log(response);

        const newData = JSON.parse(newResponse);

        console.log(newData);

    })
    .catch((error)=>{
        console.log(error);
    })

