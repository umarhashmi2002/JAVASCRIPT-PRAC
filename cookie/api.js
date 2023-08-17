
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like:

// username = John Doe
// When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

console.log(document.cookie)
document.cookie = "name1: umar hashmi";
document.cookie = "name2: Ali hashmi"
console.log(document.cookie)


//local storage
let key  = prompt("enter key please");
let city = prompt("Enter city");
localStorage.setItem(key , city);
console.log(`the city name is ${city} and the key of the city is ${key}`, localStorage.getItem(key, city));

//session storage

