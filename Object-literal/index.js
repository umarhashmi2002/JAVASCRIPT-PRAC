const person = {
    name: 'John',
    age: 34,
    location: 'Washington',
    address: {
        street: '123 block 14',
        country: 'United States'
    },
    hobbies: ['sports', 'reading']
}
console.log(person)
let x = person.name;
x = person.hobbies[0]
x = person.address.country
person.name = 'umar'
x = person
delete person.age
person.hasChildren = true

person.greet = function(){
    console.log(`hello ${person.name}`)
}
person.greet();
console.log(x)

//Spread operators with objects

const todo = {}
todo.id = 1;
x = todo
console.log(x)

const person2 = {
    address: {
        coord:{
            lat: 42.5,
            lng: -42.5
        }
    }
}
x = person2.address.coord.lng;
const obj1 = {a: 1 , b:2 , e:6}
const obj2 = {c:3 , d:2}
const obj3 = {...obj1 , ...obj2}
x = obj3

const obj4 = Object.assign({}, obj1,obj2)
x = obj4

x = Object.keys(person2)
x = Object.keys(person).length
x = Object.values(person)
console.log(x)