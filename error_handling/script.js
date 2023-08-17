
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});


//it works synchronously
/*try{
    console.log(umar)
    throw new ReferenceError("This method should never be called")
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}
*/
//custom error throw

try{
    let age = prompt("Enter your age : ")
    age = Number.parseInt(age)
    if(age < 0 || age>100){
        throw new Error("Invalid age")
    }
}
catch(err){
    console.log(err.age);
}
finally{
    console.log("Success")
}

//Finally keyword

