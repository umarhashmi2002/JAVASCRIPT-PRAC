let p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(1);
    },1000)

})

let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(2);
    },2000)
})

let p3 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(3);
    },3000)
})

p1.then((value)=>{
    console.log(value)
})


p2.then((value)=>{
    console.log(value)
})


p3.then((value)=>{
    console.log(value)
})

let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value)
})

let promise_all1 = Promise.allSettled([p1,p2,p3]);

promise_all1.then((value)=>{
    console.log(value)
})


//reading and writing from file

