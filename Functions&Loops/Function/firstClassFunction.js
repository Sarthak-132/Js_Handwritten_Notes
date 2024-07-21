// where you can use the function as a value

function Aone(s){
    s();
}

Aone(function(){ console.log("hello"); })

