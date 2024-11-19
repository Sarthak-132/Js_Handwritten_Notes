// XHR = XML HTTP Request

const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

// console.log(xhr);

// step - 1 = open method is here to hit the API 
// it takes(first argument = method type , second argument = url)
// it works will be happen asynchronously ..... it means it will happen by browser

// step - 2 = to send the request 

// step - 3 = onreadystatechange(it can define as function and it's state will change and browser will tell us) 

// what is readyState = According to MDN, "readyState" in an XMLHttpRequest (XHR) is a read-only
// property that returns a number representing the current state of an ongoing request, indicating
// whether the request is still being sent, has received headers, is loading data, or has fully
// completed essentially showing the progress of the AJAX request at any given time. 
// It lies between 0 to 4 likewise - 0 , 1 , 2 , 3 , 4  

// value   state            Description 
 
//  0      UNSENT           The request has not been initialized.[created open() but not called]
//  1      OPENED           The request has been set up.[open() called]
//  2      HEADERS_RECEIVED send() has been called and headers and status are available 
//  3      LOADING          Downloading : responseText holds partial data
//  4      DONE             The operation is complete


// console.log(xhr.readyState);

// xhr.open("GET", URL);

// console.log(xhr.readyState);


// it is also valid code but if condition will execute on every state change and onload 



// xhr.onreadystatechange = function(){

    // console.log(xhr);               // it will show the state 
    // console.log(xhr.readyState);

    // if(xhr.readyState === 4){
    //     // console.log(xhr.readyState);
    //     // console.log(xhr);
    //     // console.log(xhr.response);
    //     // console.log(typeof xhr.response);

    //     // type of response is string and we need to change it into object

    //     const response = xhr.repsonse;
    //     const data = JSON.parse(response);
    //     console.log(data);
    //     console.log(typeof data);

    // }

// }

// xhr.send();

// or 

// xhr.open("GET", URL);

// xhr.onload = function (){
//     // console.log(xhr.readyState);
//     const response = xhr.repsonse;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();



// status code indicates

// 1XX = information response - request received and continues process
// 2XX = successful - The request was successfully received, understand, accepted
// 3XX = redirection - Further option needs to be taken to complete the request 
// 4XX = client Error - The request contains bad syntax or can not be fulfilled
// 5XX = Server client - The server failed to fulfil an apparently valid request





// Error Handling 

const URl = "https://jsonplaceholder.typicode.com/posts";