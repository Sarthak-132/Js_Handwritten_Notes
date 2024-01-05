setTimeout(() => {
    console.log("Hacking wait..................... loading");
},1500);
try{
    console.log("success")
}catch(error){
    console.log("error");
}

//  try and catch work as synchronously
setTimeout(() => {
    console.log("Fetching User............... loading");
},3400);

setTimeout(() => {
    console.log("Fetched User............... loading");
},5600);

setTimeout(() => {
    console.log("Hacking Password ............... Generating details");
},7500);

setTimeout(() => {
    console.log("Hacked UserId and Password ............... checkout your mail details has been submitted");
},8500);