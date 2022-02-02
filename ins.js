let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let valide = document.getElementById("valider");

if(!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]))
    // console.log(localStorage.getItem("users")
}


valide.addEventListener("click" , (e) =>{
     e.preventDefault();
    console.log(nom.value);
 
   const user =
       {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            password: pwd.value,
        }
    let users = JSON.parse(localStorage.getItem("users"))
    // console.log(users)
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))
    console.log("users >>>> ", JSON.parse(localStorage.getItem("users")))
    // console.log(user);

    location.assign("./conn.html");
})
