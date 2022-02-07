let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let valide = document.getElementById("valide");
let bdd = JSON.parse(localStorage.getItem("local"));





valide.addEventListener("click", e=>{
    e.preventDefault(); 
    for (let i = 0; i < bdd.length; i++) {
        const element = bdd[i];
        //  console.log(element);
        // console.log(pwd.value);

        if (pwd.value == element.pwd && email.value == element.email) {
        

        }
        
        location.assign("Accueil.html");
        // else{
           
           
            
        // }

    }






    
   
})