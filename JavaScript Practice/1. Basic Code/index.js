document.write("This is document.write")
console.warn("This is an Warning");
console.error("This is an Error");

// JavaScript Variables
var number1 = 34;
var number2 = 55;
console.log(number1+number2);  // it will show in console
// console.document(number1+number2) // it will not print on the screen

// Data Types in JavaScript

// var will automatically detect what is inside: integer, double, float, string ... etc
var num1 = 1;
var num2 = 15.99;
var str1 = "This is String1";
var str2 = 'This is String2';
console.log(num1);
console.log(num2);
console.log(str1);
console.log(str2);

// Objects
var marks = {
    tushar : 1,
    tushar2 : 2,
    tushar3 : 3
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a);
console.log(a,b);


// Undefined or NULL

var und = undefined;
// if we create a variable and donot assign any value to it then by default it will be undefined
var und2;
console.log(undefined);
console.log(und);
console.log(und2);

// NULL
var nl = null;
console.log(nl);

// There are 2 types of Data Types : Primitive and Reference Type DataType

// Primitive : undefined, null, number, string, boolean, symbol
// Reference : Arrays and Object

var array = [1,2,3,4,5,6,7,8,9,"Tushar"];
console.log(array);
console.log(array[9]);


// Operators in JavaScript
var op1 = 2;
var op2 = 3;
console.log("Value of op1 + op2 : ", op1+op2);
console.log("Value of op1 + op2 : ", op1-op2);
console.log("Value of op1 + op2 : ", op1*op2);
console.log("Value of op1 + op2 : ", op1/op2);


// Assignment Operators
var op3 = op2;
op3++;
op3+=2;
console.log(op3);


// Comparision Operators
var x = 1;
var y = 2;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);
console.log(x!=y);


// Logical Operators
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);


// Functions

function avg(a,b){
    return (a+b)/2;
}
c = avg(4,6);
console.log("Function : ", c);


// Conditionals in JavaScript
var age = 22;
if(age > 18){
    console.log("Adult");
}
else if(age > 0 && age <= 18){
    console.log("Kid");
}
else{
    console.log("Not an Adult");
}


// For Loops
var array2 = [1,2,3,4,5,6,7,8,9];
console.log("Array Simple : ", array2);

console.log("Array using For loop : ");
for(var i = 0; i < array2.length ; i++){
    console.log(array2[i]);
}

// another method for iterating : using forEach()
array2.forEach(function(element){
    console.log(element);
})


// let VS var VS const
// let : used for a particular scope : scope inside a function
// var : can be used outside function 
// const : value defined or already declared (cannot be changed) / constant


// while Loop
let j = 0;
while(j<array2.length){
    console.log(array2[j]);
    j++;
}


// do-while Loop
let k = 0;
do{
    console.log(array2[k]);
    k++;
}   while(k < array2.length);

///////////////////////////////////////////////////////////////////////////////////

let myArray = ["Fan", "Camera", 19, 15, null, true];
// array methods
console.log(myArray);
console.log(myArray.length);
myArray.pop();
console.log(myArray.length);
myArray.push("Tushar");
console.log(myArray);
myArray.shift(); // it will print the array from 2nd element. (doesnot print 1st element)
console.log(myArray);

myArray.unshift("Happy");  // it will add in front of the array
console.log(myArray);
console.log("Lenght before unshift inside console.log ", myArray.length);

// if we write unshift in console.log then it will print the length of the array
console.log(myArray.unshift("TusharK"));

// to sort the array : 
myArray.sort();  // it firstly converts all elements into string and then sort according to the Dictionary
console.log(myArray);


// String in JavaScript
let myString = "Hello Everyone, Hello This is JavaScript Code";
console.log(myString.length);

console.log(myString.indexOf("H"));   // it will print the first position of the character
console.log(myString.lastIndexOf("e"));  // it will print the last position of the character

console.log(myString.slice(0,3));  // to slice the string using : [a,b)
console.log(myString.replace("Hello", "Hola")); // replace method will replace the first occurrence of the word

// Date in JavaScript
let myDate = new Date(); 
console.log(myDate);

// Methods in Date
console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getFullYear());


//////////////////////////////////////////////////////////////////////////////////////////////////////

// DOM (Document Object Model)  -- Important

// in this we can use the document to access the elements of HTML page.  (to manipulate the HTML)

// Methods in DOM : .... document.getElementById();

let elementID = document.getElementById('click');  // here click is the id of the button (in HTML code)
console.log(elementID);

let elementCLASS = document.getElementsByClassName('container');  // here click is the id of the button (in HTML code)
console.log(elementCLASS);  // it has 2 elements : button, paragraph

// to change the background of the container : button
elementCLASS[0].style.background = 'yellow';  // for first element : button
//elementCLASS[1].style.background = 'cyan'; // for second element : paragraph

// we can add css class into method also using : classList.add()
elementCLASS[1].classList.add("bg-primary");
elementCLASS[1].classList.add("text-success");

// to remove the class added using the above classList method:
elementCLASS[1].classList.remove("text-success");

console.log(elementID.innerHTML);  // it will show the HTML part of the given ID
console.log(elementID.innerText);  // it will show the inner text of the given ID


console.log(elementCLASS[0].innerHTML);  // it will show the inner HTML part of the given Class element
console.log(elementCLASS[0].innerText); // show the inner text of the class element

 
// if i want to print elements by using Tag Name : eg - Buttons, etc
tn = document.getElementsByTagName('button');
console.log(tn);

tn2 = document.getElementsByTagName('div');

// we can also create an element and add it in any class or Tag
createdElement = document.createElement('p');
createdElement.innerText = "This is a paragraph created using createElement method.";
// now append it into the tagname
tn2[0].appendChild(createdElement);  // it will add this into the same id element as tagname.

// to replace the child with new element
createdElement2 = document.createElement('b'); // b : bold text
createdElement2.innerText = "This is the bold statement created using createElement method.";
tn2[0].replaceChild(createdElement2, createdElement);

// To remove the element from a Child
tn2[0].removeChild(createdElement2);

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel);  // it will return only one element of CSS of given class

sel2 = document.querySelectorAll('.container')
console.log(sel2); // it will return all the elements of CSS of given class


// And many more methods.....
