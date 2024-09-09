// The funtion that use "this" function and use "new" keyboard is called constructor function.
// "this" keyword used for window events.
// wht use constructive function - when we want to create many elements but with the some properties then constructor function used.
/*
A Function which envoke with "new" keyword , returns an Object , if we use "This" keyword inside that function
it returns that Object. An object with all of the properties and mentioneds mentioned inside that function , 
such funciton is called constructive function.
*/

// A function is a sequence of commands or block of code that can be reused together later in a program.



function sanhokGround(){
    this.width = 12;
    this.height = 14;
    this.length = 15;
    this.zone = "safe and unsafe";
}

var battle_1 = new sanhokGround();
var battle_2 = new sanhokGround();
var battle_3 = new sanhokGround();



function button(color) {
    this.color = color;
    this.icon = false;
    this.radius = 2;
    this.pressable = true;
}

var redbtn = new button("red");
var greenbtn = new button("green");





