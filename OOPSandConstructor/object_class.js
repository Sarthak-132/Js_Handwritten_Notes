// class RailwayForm{
//     submit(){
//         alert("Form Submitted");
//     }
//     cancel(){
//         alert("You are form has been cancelled");
//     }
// }

// let harry = new RailwayForm();
// let Rohan = new RailwayForm();

// harry.submit();
// Rohan.submit();
// Rohan.cancel();





// class RailwayForm{
//     submit(){
//         alert(this.name + " : Form Submitted");
//     }
//     cancel(){
//         alert(this.name + " : Your form has been cancelled");
//     }
//     fill(givennaem){
//         this.name = givennaem;
//     }
// }

 
// let harry = new RailwayForm();
// harry.fill('Harry');
// let Rohan = new RailwayForm();
// Rohan.fill('Rohan');

// harry.submit();
// Rohan.submit();
// Rohan.cancel();





class RailwayForm{
    submit(){
        alert(this.name + " : Form Submitted of train number - " + this.trainno);
    }
    cancel(){
        alert(this.name + " : Your form has been cancelled of train number - " + this.trainno);
    }
    fill(givennaem, trainno){
        this.name = givennaem;
        this.trainno = trainno;
    }
}

let harry = new RailwayForm();
harry.fill('Harry', 374656);
let Rohan = new RailwayForm();
Rohan.fill('Rohan', 249564);

harry.submit();
Rohan.submit();
Rohan.cancel();