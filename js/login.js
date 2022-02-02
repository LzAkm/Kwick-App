// Se connecter sur kwick
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("http://greenvelvet.alwaysdata.net/kwick/api/login/" + username + "/" + password)
.then((res) => res.json())
.then((response) => {
    console.log(response)
    // garder le token dans le local storage
    localStorage.setItem('username', username)
    localStorage.setItem('token',response.result.token);
    localStorage.setItem('id',response.result.id);
    let status = response.result.status;
    if(status == "done"){
        console.log("Login succesfully");
        window.location.href = 'tchats_page.html';
    }else{
        console.log(response)
    }
})
}
