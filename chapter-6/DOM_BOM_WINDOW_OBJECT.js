// DOM.......... BOM.............WINDOW OBJECT..........

let a = prompt("Hey! How old are you");
a = Number.parseInt(a);

const canDrive = (a) => {
    return a>=18? true : false
}

if (canDrive(a)){
    alert("you can drive")
}
else {
    alert("you can't drive")
}