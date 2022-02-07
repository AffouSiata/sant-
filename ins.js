let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let valide = document.getElementById("valider");
let error =document.querySelector(".message");

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

               error.textContent=" Vos identifiants exits déja!!"
                error.style.color="red";


               
            }
            else{
                users.push(user);
                localStorage.setItem("local", JSON.stringify(users))

                
                    error.textContent=" Merci votre inscription a reussi"
                    error.style.color="green";
                


            }
             
            
        }
        
        
    }
    
    else{
        users=[];
        users.push(user);
        localStorage.setItem("local", JSON.stringify(users))



        location.assign('conn.html');

       
    }
   
    nom.value=" ";
    prenom.value=" ";
    email.value=" ";
    pwd.value=" ";
    
})
