var object = {
    name : "Harrish",
    age : 21,
    section : "A"
}

for (var key in object) {
    console.log(key);
    console.log(object[key]);
    console.log(key, object[key]);
}