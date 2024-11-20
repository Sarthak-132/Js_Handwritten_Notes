// async await 

const URL = "https://jsonplaceholder.typicode.com/posts";

// when we write async function it will always return a promise 

async function getPosts() {
    
    const response = await fetch(URL);

    if(!response.ok){

        throw new Error ("Something wrong")

    }

    const data = await response.json();

    // console.log(response); 

    // console.log(data);
    
    return data;

}

// const returned = getPosts();

// console.log(returned);

getPosts()
    .then((getResponse) =>{
        console.log(getResponse);
    })
    .catch((error) =>{

        // here on error "inside error" will not going to print on console
        // because in else we didn't give anything so it will not print 
        // it will work on server error

        console.log("inside catch");
        console.log(error);

    })

