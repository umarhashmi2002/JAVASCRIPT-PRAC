let btn = document.getElementById('btn');
let x = function(e){
    console.log('hello');
}

let y = function(e){
    console.log('bye')
}
btn.addEventListener('click',x);
console.log(btn.innerHTML)

btn.addEventListener('click',y);
