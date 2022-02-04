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
   

    if(users){
        // console.log(user);
        // for (let i = 0; i < users.length; i++) {
        //     const element = users[i];
        //     if(email.value == element.email || pwd.value == element.password){
        //         alert("vos identifiants existe")
        //     }
        //     else{
        //         users.push(user);
        //         localStorage.setItem("users", JSON.stringify(users))
        //         console.log("users >>>> ", JSON.parse(localStorage.getItem("users")))
        //     }
            
        // }
        
        for (const element of users) {
            if(email.value === element.email || pwd.value === element.password){
                alert("vos identifiants existe")
               
            }
            else{
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users))
                console.log("users >>>> ", JSON.parse(localStorage.getItem("users")))
            }
            break;
           
        }
       


    }else{
        users=[];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))
    }
    
})
