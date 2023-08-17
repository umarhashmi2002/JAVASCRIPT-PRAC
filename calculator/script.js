let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
let container = document.getElementsByClassName("container")
console.log(container)

let match = document.getElementById("id1");
let id2 = document.getElementById("id2");
console.log(match.matches('.good'));
console.log(match.closest('.good'));
console.log(match.contains(id2));