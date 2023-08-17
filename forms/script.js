console.log('form');
//single element
console.log(document.getElementById('myform'));
console.log(document.querySelector('myform'));
//multiple element
console.log(document.querySelectorAll('.item'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Item 1';
ul.children[1].innerText = 'Item 2';
ul.lastElementChild.innerHTML = '<h5>Item3</h5>';

const sumbit = document.querySelector('.sumbit');
sumbit.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log(e.target);
   // document.querySelector('#myform').style.background = '#ccc';
});

const myform = document.querySelector('#myform');
const nameIN = document.querySelector('name');
const contact = document.querySelector('contact');
myform.addEventListener('sumbit' , onsubmit);
function onsubmit(e){
    e.preventDefault();
    console.log(nameIN.value);
}