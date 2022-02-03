let email = document.getElementById("email");
let pwd = document.getElementById("password");
let valide = document.getElementById("valide");
let bdd = JSON.parse(localStorage.getItem("users"));
let modal = document.createElement("div");




valide.addEventListener("click", e=>{
    e.preventDefault(); 
    // console.log(bdd);
    for (let i = 0; i < bdd.length; i++) {
        const element = bdd[i];
         console.log(element);
        console.log(pwd.value);

        if (pwd.value == element.password && email.value == element.email) {
            
            location.assign("./Accueil.html");

        }
        else{
            // function modale(){
                
            // }
            let modal = document.createElement("div");
            modal.innerHTML=` 
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>
  
        <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                             ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
             </div>
            
            `;
            document.body.append(modal)

            
        }

    }






    
   
})