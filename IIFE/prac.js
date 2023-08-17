let a = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(456);
        },3000)
    })
}
let f = async()=>{
    let v = await a();
    console.log(v);
    let b = await a();
    console.log(b);
}
f();


//IIFE METHOD
(async ()=>{
    let v = await a();
    console.log(v);
    let b = await a();
    console.log(b);
})