// let p = fetch("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
// p.then((value1)=>{
//    return value1.json();
// }).then((value2)=>{
//     console.log(value2);
// })
const cratetodo = async ()=>{


let options = {
    method: "POST",
    Headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: "umar",
        body: "bhai",
        contact: "33023",
        userId: 100,
    }),

}
    let p = await fetch('' , options)
let response = await p.json()
return response
}

const main1= async ()=>{
    let todo  = await cratetodo();
    console.log(todo)
}
main1()