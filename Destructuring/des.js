//DESTRUCTORING

console.log("Starting")
let arr= [3,5,8,5,4,2,14,2,15,12];
let [a,b,c, ...rest] = arr
console.log(a,b,c, rest);

[a, , , ...rest] = arr
console.log(a,rest)

let {v, p} = {v: 1, p:5}
console.log(v, p)

//spread operator
let arr1 = [ 1, 2, 3, 4]
let obj1 = {...arr1}
console.log(obj1)

let sum = (x,y,z)=>{
    return x + y + z
}
let arr2 = [ 1, 2, 31]
console.log(sum(...arr2))

let obj2 = {
    name: "hashmi",
    contact: "03332315056",
    university: "fast nuces"
}
console.log({...obj2 , name: "umar hashmi"})

//closures (lexical environment)
messsage = "how are you?";
let hello = (()=>{
    //messsage = "i am fine to"
    console.log(`my name is umar hashmi  and i'm ${messsage}`)
})
hello();

//Arrayfunction
const x = {
    
    name: "hashmi",
    contact: "03332315056",
    university: "fast nuces",
    id: "21k-3270",
    show: function(){
        console.log(`my name is ${this.name} and my contatct is ${this.contact} and i study in ${this.university}`)
        setTimeout(()=>{
            console.log(`the student id is ${this.id}`)
        },2000)
    }
}
x.show();