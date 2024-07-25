// where you can use the function as a value
/*
when the function is treated as variable and you can save them and send them as arguments to another function.
*/
function Aone(s){
    s();
}

Aone(function(){ console.log("hello"); })

