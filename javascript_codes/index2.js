"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});
let number1 = [1, 2, 3, 4]
number1.forEach(function(num){
    number1 = Math.pow(num, 2)
    console.log(number1[3])
})
number1 = (num) =>{
    num = Math.sqrt(num);
} 
number1 = [1, 2, 3, 4]
let a = prompt('Enter a number')
a = Number.parseInt(a);
number1.push(a);
console.log(number1);