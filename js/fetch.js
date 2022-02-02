// Ping avec XMLHttpRequest
const requete = new XMLHttpRequest() 
const method = "GET"
const url = "http://greenvelvet.alwaysdata.net/kwick/api/ping"

requete.open(method, url)
requete.onreadystatechange = function() {
    if (requete.readyState == 4) {
        console.log(requete.responseText);
    }
}
requete.send()

// Ping avec fetch
fetch("http://greenvelvet.alwaysdata.net/kwick/api/ping")
.then((res) => res.json())
.then ((response) => {
    console.log(response);
})

// Signup 
fetch("http://greenvelvet.alwaysdata.net/kwick/api/signup/bill/secret")
.then((res) => res.json())
.then((response) => {
    console.log(response);
})

// Login
fetch("http://greenvelvet.alwaysdata.net/kwick/api/login/bill/secret")
.then((res) => res.json())
.then((response) => {
    console.log(response)
})

// Logout
fetch("http://greenvelvet.alwaysdata.net/kwick/logout/46efaa193f9a7d8dace33a94e9397842/2")
.then((res) => res.json())
.then((response) => {
    console.log(response)
})