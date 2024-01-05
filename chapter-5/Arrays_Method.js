// toString converts array into string 
let a = [3,4,5,6];
// let b = a.toString();
// console.log(b);             // 1,2,3,4,5,6

// // join method that join into array 
// let c = a.join('_');
// console.log(c , typeof c);             // 1_2_3......  string

// pop method  - remove last element from array
// let d = a.pop();
// console.log(a,d);           // [ 1, 2, 3, 4, 5 ] 6

// // push method - modify element into array
// let e = a.push(7);
// console.log(a);

// shift method - remove first element from array 

// unshift method - add element into array

// delete method - remove element(it doesnot effect the length of the array) 
// delete a[0];
// console.log(a,a.length);

// // concat method - add element into array 
// let a_more = [23,34,56];
// let both_a = (a.concat(a_more));
// console.log(both_a , both_a.length);
// // does not change previous arrays element
// let a_more_than = [9,67,67];
// let allArray = a.concat(a_more_than , a_more);
// console.log(allArray, allArray.length);

// // sort Method : modify original array it works as first number and first alphabet of it sorted on that basis
let compare = (f,g) =>{
    return f-g;
}
let number = [12,56,2,234,23,67,9,3];
// let number_sort = (number.sort());
// console.log(number_sort);
number.sort(compare)
console.log(number)

// let number_sort_compare = (number.sort(compare));
// console.log(number_sort_compare);

// reverse code it reverse original array

// splice method = used to add new items in array it works as (delete_itemfrom_indexno , delete_item_number_fromarray , add_item_anynumbers) you add one or more numbers as per your requirement
// it returna deleted array............
// let splice_number = [1,2,3,4,5];
// let splice_number2 = (splice_number.splice(2,2,101,102,102,103,104));
// splice_number.splice(2,2,101,102,103,104);
// console.log(splice_number);
// console.log(splice_number2);

// // slice () : same as string
let num_num = [1,2,3,4,5];
let num_num2 = (num_num.slice(2,4));
console.log(num_num2); 


