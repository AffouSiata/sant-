let email = document.getElementById("Email");
let pwd = document.getElementById("Password");
let valide = document.getElementById("valide");
let bdd = JSON.parse(localStorage.getItem("local"));



valide.addEventListener("click", e=>{
    e.preventDefault(); 
    if (pwd.value == bdd.pwd && email.value == bdd.email) {
        alert("votre inscription reussie");
    }
})