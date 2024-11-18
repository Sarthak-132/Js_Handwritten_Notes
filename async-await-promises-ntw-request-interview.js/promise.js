// This is asnychronous feature........ to show that use for loop in example and use any consoles

// Promise - A promise in JavaScript is an object that represents the eventual completion or 
// failure of an asynchronous operation.

const bucket = ["coffee", "chips", "Vegetables", "salt", "rice"];
// prodcue promise
const friedRice = new Promise ((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried rice");
        // or resolve({value:"fried"})
    }
    else{
        reject("couldn't make fried rice");
        // or reject(new Error("something missing from bucket"));
    }
})

// consume promise
friedRice.then((myRice)=>{
    // resolve 
    console.log("let's eat", myRice);
    },
    // reject
    (error)=>{
        console.log("error - ", error);
    }
)



//  another method for error handling then catch chaining 
const book = ["The art of being alone", "rich dad poor dad", "deep work"];
// prodcue promise
const books = new Promise ((resolve, reject) => {
    if(book.includes("rich dad poor dad") && book.includes("deep work")){
        resolve("learn compltely");
        // or resolve({value:"fried"})
    }
    else{
        // reject("incomplete");
        reject(new Error("left some pages"));
    }
})

// consume promise
books.then((learn)=>{
    // resolve 
    console.log(learn);
    }).catch((error)=>{
        // reject
        console.log(error);
})




// 