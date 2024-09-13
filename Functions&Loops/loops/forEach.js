// forEach loop only works on array 
// It will never make changes in the original array it will make changes in the imaginary array / copy array

var a = [12,34,465,6,39,32,3,343,434,54,65,665];

a.forEach(function(val , index, array){
    console.log(val+2, index, array);
})
console.log(a)