// This is template litteral method (\n , \t , \r takes only one character)
let a = "Mani";
let b = "raj";

let both = (`${a} is a friend of ${b}`);
console.log(both);

let name34 = "Hello\rHye"
let name12 = "Hey\rHello"
let name22 = "Haanji\rraam"
console.log(name34);
console.log(name12);
console.log(name22);

// strings are immutable you can not change them
// methods of string-------->this also takes negative numbers
let name1 = "Raja bhaijaan ";
let name2 = 'thik   hai';
let str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 17));     // add first element and exclude last element
console.log(str.substring(7));         //after 7 - Banana, Kiwi
console.log(str.substring(-4));        //0 to -4 -->  Kiwi
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.slice(2,9));    // add first element and exclude last elem
console.log(name1.slice(1));
console.log(name1.replace("bhai", "bhau"));    //replaceAll()
console.log(name1.concat("", name2 , " ok "));
console.log(name1.trim(name1));        //trimStart()  and trimEnd() #remove white space from start and end. 


// // for loop for print string
let name5 = "John"
for(let i=0; i<(name5.length); i++) {
    console.log(name5[i]);
}

// .include method : it will print true or false 
const sentence = "Hello, my name is Tom";
const name = "Tom";
console.log(sentence.includes(name)); 
console.log(`The Name "${name}" ${sentence.includes(name) ? "is" : "is not"} in the sentence`); 

// To convert the string to number and only show number from the sentence 
let hammerMan = "I need 846 volts of electricity";
// let electricity1 = (hammerMan.slice(7,16));    //gives 846 volts      typeof = string
// console.log(electricity1);
// console.log(typeof(electricity1));
// let electricity = Number.parseInt(hammerMan.slice(7,16));    // 846   typeof = number
// console.log(typeof electricity);
// console.log(electricity);



// toString - cnvert in string
let stringstring = 23;
console.log(stringstring.toString());           // 23  
console.log(typeof stringstring.toString());    // string


// Split - split it where spaces are present. otherwise not split anything. converts string to array
let splitting = "Hello, my name is grow";
console.log(splitting.split(" "));     // [ 'Hello', 'my', 'name', 'is', 'grow' ]


// charAt -- it is not works for negative numbers
let char = "Hello";
console.log(char.charAt(4));     // o   


// at - it works for negative numbers
console.log(char.at(2));     // l
console.log(char.at(-1));     // o


// indexOf - to find the index numebr
let ind = "hello everyone";
console.log(ind.indexOf("e"))       //1
console.log(ind.indexOf("e", 2))    //6


// to find out ascii code - charCodeAt
let character = "{";
let characterNum = "{)sdF";
console.log(character.charCodeAt());        //123    or     charCodeAt(0)
console.log(characterNum.charCodeAt(2));    //115   
console.log(characterNum.charCodeAt(7));    //NaN   (When charactor not present on that place index) 



// startWith and endsWith check startswith or endswith or not - gives true or false

let flask = "flare     gun";
console.log(flask.startsWith("fl"));
console.log(flask.endsWith("gun"));



// trim - only works for ending and starting white spaces. trimEnd and trimStart
console.log(flask.trim());


// replace
let myNAme = "Hello from Heaven";
console.log(myNAme.replace("Heaven", "Earth"));


// sort - it is not sort it in ascending or descending order while give 
let numbers = [1, 2, 3 ,4 ,5 ,6 ,7 ,7 , 22, ]
console.log(numbers.sort());                    //  [1, 2, 22, 3, 4, 5, 6,  7, 7]
