// it is inbuild in js fetch 

const URL = "https://jsonplaceholder.typicode.com/posdsssts";


// it is a function that returns something(Promise). so we can use .then()
// it requests itself and request will be get method

fetch(URL)
.then((response)=>{

    // if no reponse from url then it will show ok as false otherwise on success ok as true....

    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("something went wrong");
    }

    // console.log(response)

    // response "it" will gives window keypoints like headers, status , redirected , url 
    // and so on but not getting data so we have .json() method to get data 
    // but it will also return a promise and through promise chaining we get the data

    return response.json()

}).then((data)=>{
    console.log(data);
})
.catch((errror)=>{
    // here on error "inside error" will not going to print on console
    // because in else we didn't give anything so it will not print 
    // it will work on server error
    console.log("inside catch");
    console.log(errror);
})





// whatever we are doing in fetch() .then() again and again we have replacer for it as async await.....

