let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let valide = document.getElementById("valider");

// if(!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify([]))
//     // console.log(localStorage.getItem("users")
// }


valide.addEventListener("submit" , (e) =>{
     e.preventDefault();
    console.log(nom.value);
 
   const user =
       {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            password: pwd.value
        }
    let users = JSON.parse(localStorage.getItem("local"))
    // console.log(users)
    if(users){
        for (const element of users) {
            console.log(element);
            if(email.value == element.email || pwd.value == element.password){
                alert("vos identifiants existe")
            }
            else{
                users.push(user);
                localStorage.setItem("local", JSON.stringify(users))
            }
            
            
        }

    }


    else{
        users=[];
        users.push(user);
        localStorage.setItem("local", JSON.stringify(users))
    }
   
    nom.value="";
    prenom.value="";
    email.value="";
    pwd.value="";
})
