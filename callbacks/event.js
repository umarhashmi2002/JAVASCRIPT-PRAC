/*console.log('Running')
setTimeout(function() {
    console.log('Finished')
},2000)
console.log('starting');

function loadscript(src , callback) {
    let script = document.createElement('script')  
    script.src = src;
    script.onload = function(){
        console.log('loaded script' +' '+ src);
        callback(null , script);
    }
    script.onerror = function(){
        console.log('error loading script' +' '+ src);
        callback(new Error('error loading script'))
    }
    document.body.appendChild(script);
}
function hello(error){
    if(error){
        console.log('error');
        return;
    }
    console.log('hello')
}

function good(error , src){
    if(error){
        console.log('error');
        return;
    }
    alert('good')
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.5.3/dist/js/bootstrap.bundle.min.js", good)
*/
 //promises
 console.log('promises')
 setTimeout(function(){
    console.log('setTimeout');
 },2000)
 console.log('buy');
let promise = new Promise(function(resolve, reject){
    console.log("i am promise")
    resolve(56)
})

let p = new Promise((resolve, reject)=>{
    console.log('promise is pending')
    setTimeout(()=>{
        console.log(' i am setting promise')
        resolve(true)
      // reject(new Error("i am rejected promise"));
      //p.reject(new Error("i am rejected promise"))
    },3000)
})
p.then((value)=>{
    console.log(value)
})
p.catch((error)=>{
    console.log('error occurred')
})

/*let data = 1;
console.warn(data);
data =5;
setTimeout(()=>{
    console.warn(data);
},2000)
*/

let data1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
        //resolve({name:"umar", age: 21})
        //reject(new Error("i am rejected promise"));
    },1000)
})
//console.warn(data1);
data1.then((item)=>{
    console.warn(item)
    return item * 10
}).then((item)=>{
    console.warn(item)
    return item * 10
}).then((item)=>{
    console.warn(item)
    //return item * 10
}).catch((err)=>{
    console.warn("catch error" + err);
})
data1.finally((item)=>{
    console.warn("finally", item)
})
//promise chaining
/*let data2 = fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.5.3/dist/js/bootstrap.bundle.min.js")
data2.then((item)=>{
return item.json()
}).then((result)=>{
    console.warn(result)
})

*/
let data3 = Promise.all([
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(" 1 Timeout")
        },2000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("5 Timeout")
        },4000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("3 Timeout")
        },1000)
    })
])

data3.then((data)=>{
    console.warn("then block", data)
}).catch((err)=>{
    console.warn("catch block", err)
})


data3 = Promise.allSettled([
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(" 1 Timeout")
        },2000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("5 Timeout")
        },4000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("3 Timeout")
        },1000)
    })
])

data3.then((data)=>{
    console.warn("then block", data)
}).catch((err)=>{
    console.warn("catch block", err)
})

 data3 = Promise.race([
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(" 2 second")
        },2000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("4 seconds")
        },4000)
    }),
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("1 second")
        },1000)
    })
])

data3.then((data)=>{
    console.warn("then block", data)
}).catch((err)=>{
    console.warn("catch block", err)
})

//Attaching multiple handlers
let p1 = new Promise((resolve, reject)=>{
    console.warn("hey i am not resolved");
    setTimeout(()=>{
        console.warn("i am resolved");
        resolve(1);
    },2000)
})
p1.then(()=>{
    console.log("hey i am resolved");
})
p1.then(()=>{
    setTimeout(()=>{
        console.warn("i am resolved bye");
    },3000)
})

