/* -------------------------- VARIABLES ----------------------------------*/
var createUsername = document.getElementById('createUsername');
var createPassword = document.getElementById('createPassword');
var createConfirmPassword = document.getElementById('createConfirmPassword');
var enregistrer = document.getElementById('enregistrer');
var erreur = document.getElementById('erreur');

/* ------------------------- TRAITEMENTS --------------------------------*/
enregistrer.addEventListener("click",function(){
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
})
