// callbacks : callback function in javascript this is the asychronous function

// it tells in element added the loadScript in body 
// function loadScript(src){
//     var script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")




// to know script added or not consoletells
// function loadScript(src){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded src : " + src);
//     }
//     document.body.appendChild(script);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")




// to run any function using callback on run time (hello function passes as callback)
// function loadScript(src,callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded src : " + src);
//         callback();
//     }
//     document.body.appendChild(script);
// }
// function hello(){
//     alert("Hello World!");
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)




// callback also takes arguments
// function loadScript(src,callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded src : " + src);
//         callback(src);
//     }
//     document.body.appendChild(script);
// }
// function hello(src){
//     alert("Hello World! \n" + src);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)




// error handling such as link doesn't exist and you added it in loadScript in that case :
function loadScript(src,callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded src : " + src);
        callback(src);
    }
    script.onerror = function(){
        console.log("error loading src : " + src);
    }
    document.body.appendChild(script);
}
function hello(src){
    alert("Hello World! \n" + src);
}
loadScript("https://cdn.jsd.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)





// another thing that we can do it that pass error with function

// function loadScript(src,callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded src : " + src);
//         callback(null ,src);
//     }
//     script.onerror = function(){
//         console.log("error loading src : " + src);
//         callback(newerror("src got some error"));
//     }
//     document.body.appendChild(script);
// }
// function hello(error, src){
//     if(error){
//         console.log(error);
//     }
//     alert("Hello World! \n" + src);
// }
// loadScript("https://cdn.jsd.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)


// downsides of the callback hell and callback i mean...... you can use callback but u have to avoid use of callback let get started with the IDE
// solution of callback hell or pyramid doom is promises is promises
