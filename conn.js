let email = document.getElementById("email");
let pwd = document.getElementById("password");
let valide = document.getElementById("valide");
let bdd = JSON.parse(localStorage.getItem("users"));





valide.addEventListener("click", e=>{
    e.preventDefault(); 
    // console.log(bdd);
    for (let i = 0; i < bdd.length; i++) {
        const element = bdd[i];
         console.log(element);
        console.log(pwd.value);

        if (pwd.value == element.password && email.value == element.email) {
            
            location.assign("Accueil.html");

        }
        else{
            // function modale(){
                
            // }
           
            
        }

    }






    
   
})