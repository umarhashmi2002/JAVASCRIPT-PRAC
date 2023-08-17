console.log("done");
let name = [
    firstname = 'umar',
    secondname = "hashmi",
    contact = "03345677",
    sex = "male"
]
//const {firstname, secondname} = name
console.log(firstname)
name.forEach(element => {
    console.log("element: " + element )
});

let array = [1,3,5,3,33,5,0]
array.forEach(element => {
    console.log(element * element);
});


function sum (x,y)
{
    return x * 2 + y * 2
}

const todo = [
    {
        id : 1,
        work : "meeting with boss",
    },
    {
        id : 2,
        work : "meeting with hary",
    },
    {
        id : 3,
        work : "meeting with staff",
    }
]
console.log(todo);
console.log(todo[1].work)


const todoJSON = JSON.stringify(todo); //converting to JSON format
console.log(todoJSON);
//conventional for loop
for(let i = 0 ; i < todo.length; i++) {
    console.log(todo[i].work);
}
//for of loop
for ( let todos of todo){
    console.log(todos.work);
}

//high order array method
//foreach 
todo.forEach(function(todos){
    console.log(todos.work);
})

//map 
const todowork = todo.map(function(todos){
    return todos.work;
})

//filter
const todoid = todo.filter(function(todos){
    return todos.id === true
}).map(function(todos){
    return todos.id
})
console.log(todoid);
//console.log(todos);
console.log(todowork);

const student = {
    names: ["harry", 'ali' , 'umar'],
    marks: ['56' , '71' , '65'],
    rollno: ["12","32","54"],
    address: {
            add : ["karachi: fb area", 'karachi DHA','karachi: lalokhait'],
    },
}
console.log(student)
console.log(student.names[1] , student.marks[1], student.address.add[1]);
const {names , marks , address: {add}} = student
console.log(names);
student.email = ['hashmail@gmail.com', 'hashmail@gmail.com', 'hashmail@gmail.com']
console.log(student)

//functions
function average(a,b){
    console.log((a+b)/2);
}
average(3,5);
sum = 0;
//Arrow functions ES6
const mean = (a,n) =>{
    for(let i of a){
         sum = sum + a[i];
    }
    return sum / n;
}
array = [1,2,4,5,3,4,2]
console.log(mean(array,7));

//constructor function
function students(email, marks){
    this.email = email;
    this.marks = marks; 
}
//instantiate object
const object1 = new students('hashmiumarr@gmail.com', 98);
console.log(object1.email);

//class
class person{
    constructor(name , dob){
        this.name = name;
        this.dob = new Date(dob);
    }
    getbirthyear(){
        return this.dob.getFullYear();
    }
    getname(){
        return this.name;
    }
}
const obj = new person('umar', 321);
console.log(obj.getbirthyear());
console.log(obj.getname());

