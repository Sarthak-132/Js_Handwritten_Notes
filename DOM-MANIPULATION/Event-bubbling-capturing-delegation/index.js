// event bubbling / event propogation =>
// Event BubblingEvent bubbling is the default behavior in which an event 
// triggered on a nested element propagates up through its ancestors in the  
// DOM hierarchy, allowing each ancestor to respond to the event.


// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// // here if click on grandparent then only this click() will be fired
// grandparent.addEventListener("click", function(){
//     console.log("you clicked on grandparent.");
// })

// // here if click on parent then only this click() will be fired and grandparent as well due to it's child of grandparent
// parent.addEventListener("click", function(){
//     console.log("you clicked on parent.");
// })

// // here if click on child then all three click event will be fired due to these are parent of child
// child.addEventListener("click", function(){
//     console.log("you clicked on child.");        
// })

// // it is a main parent of all so if we will click anywhere it will definately fire  
// document.body.addEventListener("click", function(){
//     console.log("you clicked on body.");        
// })



// Capturing Event =>

// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener("click", function(){
//     console.log("you captured grandparent.");
// }, true)

// parent.addEventListener("click", function(){
//     console.log("you captured parent.");
// }, true)

// child.addEventListener("click", function(){
//     console.log("you captured child.");        
// }, true)
  
// document.body.addEventListener("click", function(){
//     console.log("you captured body.");        
// }, true)


// grandparent.addEventListener("click", function(){
//     console.log("you bubbled grandparent.");
// })

// parent.addEventListener("click", function(){
//     console.log("you bubbled parent.");
// })

// child.addEventListener("click", function(){
//     console.log("you bubbled child.");        
// })
  
// document.body.addEventListener("click", function(){
//     console.log("you bubbled body.");        
// })

// It will run like first capture event and then bubbling event suppose we clicked on child
// capture event run first document > grandparent > parent > child afterwards
// bubbling event run first child > parent > grandparent > document



// Event delegation - suppose you clicked on child it will fire it and give same answer-you clicked me
// here i can access all the element that are present in grandparent
// on which element i will that element i will get here
const grandparent = document.querySelector('.grandparent');

grandparent.addEventListener("click", function(e){
    console.log("you clicked me");  
    console.log(e);  
    console.log(e.target.textContent);  
})