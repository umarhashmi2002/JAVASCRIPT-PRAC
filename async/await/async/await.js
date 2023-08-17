// async function umar() {
//   return 5;
// }
// umar().then((x) => {
//   console.log(x);
// });

// async function check() {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = 45;
//       resolve("data1 : " + data);
//     });
//   }, 1000);

//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data = 54;
//       resolve("data2: " + data);
//     }, 2000);
//   });
//   /*p1.then((data) => {
//     console.log("data 1 given : " + data);
//   });
//   p2.then(() => {
//     console.log("data 2 given: " + data);
//   });*/

//    let dataP1 = await p1;
//    let dataP2 = await p2;
//    return[dataP1, dataP2]
// }
// console.warn("welcome to data checking : ");
// let result = check();
// console.log(result);
// result.then((data)=>{
//     console.log(data);
// })

//practice
a = async (text)=>{
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve(text);
    },2000)
  })
  
}
(
 async ()=>{
    let name = await a("umar hashmi");
    console.log(name);
    let id  = await a("welcome to data checking : ");
    console.log(id);
  }
)()