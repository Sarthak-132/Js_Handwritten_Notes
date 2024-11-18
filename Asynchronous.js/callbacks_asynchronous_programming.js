// callback , callback hell , pyramid of doom
// asynchonous js

// simple and long way but not efficient because it is not linear way 
// 1st run head1 > head3 > head2

// const head1 = document.querySelector(".heading1")
// const head2 = document.querySelector(".heading2")
// const head3 = document.querySelector(".heading3")

// setTimeout(()=>{
//     head1.textContent = "heading 1"
//     head1.style.color = "violet";
// } , 1000)

// setTimeout(()=>{
//     head2.textContent = "heading 2"
//     head2.style.color = "red";
// } , 3000)

// setTimeout(()=>{
//     head3.textContent = "heading 3"
//     head3.style.color = "green";
// } , 2000)




// Callback hell In JavaScript, "callback hell" or the "pyramid of doom" refers to a situation where you have 
// multiple nested callback functions, making the code difficult to read and maintain.

// const head1 = document.querySelector(".heading1")
// const head2 = document.querySelector(".heading2")
// const head3 = document.querySelector(".heading3")
// const head4 = document.querySelector(".heading4")
// const head5 = document.querySelector(".heading5")
// const head6 = document.querySelector(".heading6")
// const head7 = document.querySelector(".heading7")
// const head8 = document.querySelector(".heading8")
// const head9 = document.querySelector(".heading9")

// setTimeout(()=>{
//     head1.textContent = "heading 1"
//     head1.style.color = "violet";
//     setTimeout(()=>{
//         head2.textContent = "heading 2"
//         head2.style.color = "red";
//         setTimeout(()=>{
//             head3.textContent = "heading 3"
//             head3.style.color = "rgb(233, 47 , 87)";
//             setTimeout(()=>{
//                 head4.textContent = "heading 4"
//                 head4.style.color = "green";
//                 setTimeout(()=>{
//                     head5.textContent = "heading 5"
//                     head5.style.color = "blue";
//                     setTimeout(()=>{
//                         head6.textContent = "heading 6"
//                         head6.style.color = "yellow";
//                         setTimeout(()=>{
//                             head7.textContent = "heading 7"
//                             head7.style.color = "cyan";
//                             setTimeout(()=>{
//                                 head8.textContent = "heading 8"
//                                 head8.style.color = "rgb(200,100,50)";
//                                 setTimeout(()=>{
//                                     head9.textContent = "heading 9"
//                                     head9.style.color = "tomato";
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000) 
// }, 1000)




// promises

const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")
const head7 = document.querySelector(".heading7")
const head8 = document.querySelector(".heading8")
const head9 = document.querySelector(".heading9")

// const red = Math.floor(Math.random() * 256);
// const green = Math.floor(Math.random() * 256);
// const blue = Math.floor(Math.random() * 256);
// const rgb = `rgb(${red}, ${green}, ${blue})`;
// body.style.backgroundColor = rgb;

function changeText(elem, text, rgb, time, onsuccess, onfailure){
    
    setTimeout(()=>{
        if(elem){
            elem.textContent = text;
            elem.style.color = rgb;
            // onsuccess() - do not do like that
            if(onsuccess){
                onsuccess();
            }
            else{
                if(onfailure){
                    onfailure();
                }
            }
        }
    }, time)
}

// changeText(head1, "one", "green" , 2000 , ()=>{
//     changeText(head2, "two", "red" , 2000)
// })

changeText(head1, "one", "green", 2000, ()=>{
    changeText(head2, "two", "red", 2000, ()=>{
        changeText(head3, "three", "yellow", 2000, ()=>{
    
        }, ()=>{console.log("Error")});
    }, ()=>{console.log("Error")});
}, ()=>{console.log("Error")});