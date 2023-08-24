const array = [
    { name: 'umar hashmi' , age: 21, marks: 72},
    { name: 'ali hashmi' , age: 19, marks: 88},
    { name: 'ahmed hashmi' , age: 17, marks: 90},
    { name: 'saad hashmi' , age: 6, marks: 87},
    { name: 'adil hashmi' , age: 53, marks: 82}
]

const result = array
.filter(number => number.marks > 80)
.sort((a,b)=>  b.marks - a.marks)
.map(list => `Student with above 80 marks are: Name: ${list.name} Marks: ${list.marks}`)

console.log(result)