/*
console.log("Hello World!");
//alert("This is an alert");
//document.write("Hello World Document Write");
console.log(4+6);
console.error("Show Error Message");
console.warn("Show Warning Message");
console.log("%cHello World","color:green");
console.log("%cHello World","color:white;background:black;padding:5px");

Multi-line comment

//single line comment
//document.write("Welcome");
//alert("hello");
//console.log("it Worked");

//VARIABLES
var x = 5;
var y = "world";
x = 10;
x = "ten";
//variables are case-sensitive
//variables cannot be reserved word (ex. var alert = )
//variables cannot start with a number (ex. var 4x = )
//variables can begin with a underscore (ex. var _item = )
//variables can begin with a dollar sign (ex. var $item = )
//variables should use camelCase for multiple words - avoid spaces (ex. var myValue = )
//global variables are accessible inside and outside of functions

//BOOLEANS
var myString = "Hello World";
var myNumber = 100;
var myBoolean = true;
var myNone; //no value assigned
var myNull = null;
typeof myString; //returns string type
var myDoubleQuotes = "Hello \"World's\" "; // backslash escapes quotations, escape backslash with double backslash

//PROMPTS
/*
var question = "What is your name?";
var answer = prompt(question); // Prompts for the users name, stores in a variable
alert("Hello, " + answer);

var question1 = "What is your ";
var question2 = "age";
var question3 = "name";
var myAge = prompt(question1 + question2 + "?");
var myName = prompt(question1 + question3 + "?");
alert(myAge);
alert(myName);

//ARITHMETIC OPERATORS
var myString = "a" + "" + "b";
var myTotal = (5 + 5) * 5;
var myDivide = 5/4;
var myModulas = 13 % 5; //returns the remainder
myTotal++;
myModulas--;

//var a = prompt("first number");
//var b = prompt("second number");
//var total = a + b;
//console.log(total);
//var sum = Number(a) + Number(b);
//console.log(sum);

//ASSIGNMENT OPERATORS
/*
var a = 3;
var b = 8;
//b = b + a;
b += a; //value of b + value of a
console.log(b);
b -= a;
console.log(b);
b *= a;
console.log(b);
b /= a;
console.log(b);
b %= a;
console.log(b);
*/

//LOGICAL OPERATORS
/*
a = 5;
b = 4;
c = "5";
console.log(a == b); //returns false, 5 does not equal 4
console.log(a == (b+1)); //returns true, 5 does equal 5
console.log(a === b); //returns false, 5 does not equal 4
console.log(a != b); //returns true, 5 does not equal 4
console.log(a !== (b+1)); //returns false, 5 does equal 5
console.log(a > b); //returns true, 5 is greater than 4
console.log(a < b); //returns false, 5 is not less than 4
console.log(a >= b); //returns true, 5 is greater than or equal to 4

var myTernary = (a == c) ? "Equal" : "Not"; //if a equals c, output Equal. If not, output Not
console.log(myTernary);

var question1 = prompt("Number 1");
var question2 = prompt("Number 2");
var myTernary2 = (Number(question1) == Number(question2)) ? "Yes" : "No";
console.log(myTernary2);

var a = 5;
var b = 10;
var c = "5";
console.log(a == 5 && a == c); //returns true, only 1 needs to be true
console.log(a == 5 && a === c); //returns false, both need to be true
console.log(a == 5 && a == c && b == (a * 2)); //returns true, b = a * 2
console.log(a == 5 || a === c); //returns true, either has to be true
console.log(!(a === c)); //returns true, a does not equal c

b++;
var d = ((b%5) > 0) ? "odd" : "even";
console.log(typeof a == "number");
console.log(typeof c == typeof "number");
console.log((d == "odd" && b>10 && b>= (a*2)));

//STORING MULTIPLE VALUES INSIDE A VARIABLE
var arr = ["string",100,false]; // literal array
var arr3 = []; // assigns variable type as an array
var arr1 = new Array("string",100,false); // less common way of writing an array
var arr2 = new Array(); // less common way of writing an array

console.log(arr);
console.log("Length of array: " + arr.length);
console.log(arr[0]); //index value of array item "string"
console.log(arr[1]); //index value of array item 100
arr[1] = "New Value";
console.log(arr[1]);
*/















