/*const node_modules/express = require('express');
const { readFile } = require('fs');
const { request } = require('http');
const app = express();
app.get('/', async (request, response)=>{
    response.send(await readFile('./project.html','utf8'))
})
app.get('/', (req, response) => {
    readFile('./project.html', utf8 , (err, data) => {
          if(err)
          {
            response.status(500).send('sorry , out of order')
          }
          response.send(html)
    });

});*/
console.log("Starting");
var a = 67;
console.log(a);
 a = 17
//const used to declare const
//var used to declare block
//let used to declare 
console.log("javascript lecture 3 : var , onst , let");
var  b = 45;
 a = 55
console.log(a);
//block function
{
    let a = 'this';
    console.log(a);
}
console.log(a);
//prefer using let and const instead of var
const g = 'umar';
console.log(a);
//const umar //it will throw an error

//objects and preempetive datatypes
//null :
let p = null
//number
 b = 355
//symbol 
let c = Symbol("i am a symbol");
//string
let s = "hashmi";
//boolean
let f  = false
//bigint
let e = BigInt("654") + BigInt("3");
//undefined
console.log(typeof c)

//objects are key value pairs and it is non premptive
const item = {
    name: "hashmi",
    price: 100,
    "Harry" : false
}
console.log("Harry");

//pracrice set
//Q1
 a = "hashmi"
b = 32;
console.log(a+b);
console.log(typeof (a+b));
//Q2
const item1 = {
    "umar" : true,
    "ali":false
}
item1['friend'] = "ahmed";
console.log(item1);

const dictionary ={
    appreciate : "apppreciate karna"
}
console.log(dictionary.appreciate);

//operators
console.log("operators in javascript");
a=56;
b=44;
c = 0;
console.log('a+b',a+b);
console.log('a-b',a-b);
console.log('a*b',a*b);
console.log('a/b',a/b);
console.log('a%b',a%b);
console.log('a**b',a**b);
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a > b);
console.log("conditional statements"); 
  let h = prompt("what is your age?")
h = Number.parseInt(h); // convert string to number parseint() function

//let q = alert();
if(a > b){
    console.log("a is greater than b")
}
else if(b > a){
    console.log("b is greater than a")
}
else{
    console.log("a and b are equal")
}
let age = 12
switch(age){
    case 12:
        console.log("you are 12")
        break
    case 23:
        console.log("you are 23")
        break
    default:
        console.log("you are not");
        break
}
//for loop
//for in loop
//for of loop
//while loop
//do while loop
for(let i = 0; i < 5 ;i++){
    console.log(i);
}

let obj = {
    "harry": 56,
    "umar":76,
    "ali":89
}

for(let i = 0; i < Object.keys(obj); i++) {
    console.log(i,obj[i]);
}
for(let key in obj) {
    console.log("marks of   " + key + " are" + obj[key]);
}

for (a in obj){
    console.log("marks of " + a + "are", obj[a]);
}//this is for in loop

//fot of loop obj should be iterable object
for (b of "hashmi"){
    console.log(b)
}
//while loop
while(c<a)
{
    let i;
    console.log(c);
    i++;
}
//do while loop
do{
    let i;
    i++;
}while(c<a);

//function in javascript function

function sum(x,y){
    console.log("done")
    return 2 * (x + y)/2
}

console.log("this sum function will print value",sum(2,3));

//program to calculate mean 
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log("mean of 4 numbr is",mean(4,2,5,2));
const average = (a,b,c,d) =>{
    return (a+b+c+d)/4
}
console.log("average of 4 numbr is",average(4,2,5,2));
const mode = (a,b,c,d) => {
    return Math.mode
}
console.log("mode of 4 numbr is",mode(4,2,5,2));

//string in javascript
let namee = "umar hashmi"
let fast = "fast nuces"
console.log(namee.length)
let sentence = '${fast} study in ${namee}'
console.log(namee.toUpperCase());
console.log(namee.toLowerCase());
console.log(namee.slice(2, namee.length));

//ARRAYS
let array = [91,27,56,35,22,false,"not present"]
console.log(array)
for (i =0 ; i<array.length ; i++)
{
    console.log(array[i]);
}
 sum = array.join(",");
console.log(sum, typeof sum)
let push = array.push(56);
console.log(array.length);
r = array.shift()
console.log(r , array);
for (i =0 ; i<array.length ; i++)
{
    console.log(array[i]);
}
let num1 = [1,2,3,4,5,6,7,8,9]
delete num1[0];
console.log(num1);
//is array length change  if we delete item from array through delete function ans is no
let newArray = num1.concat(array)
console.log(newArray);
newArray.sort()
console.log(newArray);
let compare = (a,b)=>{
    return a-b
}
let compare1 = (a,b)=>{
    return b-a
}
num1.sort(compare1);
console.log(num1);
num1.sort(compare);
console.log(num1);

//slice and splice function
newArray.splice(2,3,211,222,233)
console.log(newArray)

//foreach loop , forin loop ,
for(i=0; i<newArray.length; i++){
    console.log(newArray[i]);
}
newArray.forEach(element => {
    console.log(element * element)
});

//html collection we use array.from and then use foreach loop

let name  = "umar"
let arr = Array.from(name)
console.log(arr);
for ( i of arr){
    console.log(i);
}

for(i in arr){
    console.log(i);
}
for (let items in arr){
    console.log(items);
}

//map filter and reduce functions
//map is used when we want to create
//new array and forEach is used to perform operation
a = newArray.map((value , index , newArray)=>{
return value  + 1;
})

console.log(a);

//array filter method
let arr2 = [2,4,6,3,7,4,64,25,5]
let a2 = arr2.filter((a)=>{
return a< 10
})
console.log(a2)

//array reduced
let arr3 = arr2.reduce((a,b)=>{
    return a+b
})
console.log(arr3)
//practice prob    1
a = prompt("Enter a number")
a = Number.parseInt(a)
arr2.push(a)
console.log(arr2)
//practice prob    2
do{
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr2.push(a)
}while(a!=0)
console.log(arr2)

//BOM DOM 
//Window.console.log(window);
console.log(document.body);
//document.body.style.background = "yellow"








