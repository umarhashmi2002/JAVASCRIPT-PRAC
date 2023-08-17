let  a = {
    name: "pakistab",
    code: 455,
    run: ()=>{
        console.log("pakistab is a good counttry");
    }
}
let p ={
    run: ()=>{
        console.log("india is a good counttry");
    }
}



p.__proto__ = {
    run: ()=>{
        console.log("bangladesh is a good counttry");
    }
}

a.__proto__ = p;
let x= a.run();
console.log(x)