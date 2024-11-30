// const prompt = require('prompt-sync')();
// // const p = prompt("kaisa hai ?");         npm i prompt-sync

let a = "Harrish";
// a = Number.parseInt(a);  //converting string to the number 


// The error message you provided indicates that the ReferenceError is being thrown because the prompt function is not defined. In the context of the error message, it seems like you are trying to run this code in a Node.js environment. However, the prompt function is typically used in web browsers to display a dialog box and obtain user input.



// typecasting in javascript :
a = Number.parseInt(a);
console.log(a);       //Nan



// SWITCH STATEMENT 
// EXPRESSION - 1
let text;
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);


// EXPRESSION - 2
let txt;
switch (new Date().getDay()) {
  case 4:
  case 5:
    txt = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    txt = "It is Weekend";
    break;
  default:
    txt = "Looking forward to the Weekend";
}
console.log(txt);


// if else 
let marks = -1;

if (marks >= 40 && marks <= 70) {
  console.log("c Grade");
} 
else if (marks >= 71 && marks <= 90) {
  console.log("B Grade");
} 
else if (marks >= 91 && marks <= 100){
  console.log("A Grade");
}
else if(marks>100 && marks<0){
  console.log("invalid marks");
}
else {
  console.log("fail");
}



