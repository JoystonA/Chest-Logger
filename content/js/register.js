/* -------------------------- VARIABLES ----------------------------------*/
var createUsername = document.getElementById('createUsername');
var createPassword = document.getElementById('createPassword');
var createConfirmPassword = document.getElementById('createConfirmPassword');
var enregistrer = document.getElementById('enregistrer');
var erreur = document.getElementById('erreur');
var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* ------------------------- TRAITEMENTS --------------------------------*/
enregistrer.addEventListener("click",function(){
    if(verify_input(createUsername.value,regex_email,createUsername)==true){
        if(createPassword.value==createConfirmPassword.value){
            var hashPassword = hash(createPassword.value)
            localStorage.setItem('email', createUsername.value)
            localStorage.setItem('mdp_user', hashPassword)
            erreur.innerText="Inscription acceptée"
            erreur.style.fontWeight="bold"
            erreur.style.color="white"
            erreur.style.marginTop="10px"
            sleep(1000).then(() => {window.location="connexion.html"});
        }
        else{
            erreur.innerText="L'inscription a échoué !"
            erreur.style.fontWeight="bold"
            erreur.style.color="white"
            erreur.style.marginTop="10px"
        }
    }
    else{
        erreur.innerText="L'inscription a échoué !"
        erreur.style.fontWeight="bold"
        erreur.style.color="white"
        erreur.style.marginTop="10px"
    }
})

createUsername.addEventListener('keyup',function(event){
    verify_input(createUsername.value,regex_email,createUsername)
})