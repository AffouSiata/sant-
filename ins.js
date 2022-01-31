let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let valide = document.getElementById("valider");

valide.addEventListener("click" , (e) =>{
    e.preventDefault();
    let user ={
        nom:nom.Value,
        prenom:prenom.Value,
        email:email.Value,
        pwd:pwd.Value,

    }
    localStorage.setItem("local",JSON.stringify(user));
    console.log(user);
})
