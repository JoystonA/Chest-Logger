/* -------------------------- VARIABLES ----------------------------------*/
var inputUsername = document.getElementById('inputUsername');
var inputPassword = document.getElementById('inputPassword');
var connexion = document.getElementById('connexion');
var erreur = document.getElementById('erreur');

/* ------------------------- TRAITEMENTS --------------------------------*/
connexion.addEventListener('click',function(){
    if(inputUsername.value==localStorage.getItem('email')){
        var hashPassword = hash(inputPassword.value);
        if(hashPassword==localStorage.getItem('mdp_user')){
            window.location='index.html'
            erreur.innerText="Connexion acceptée"
            erreur.style.fontWeight="bold"
            erreur.style.color="white"
            erreur.style.marginTop="10px"
        }
        else{
            erreur.innerText="Vos identifiants de connexion sont erronés !"
            erreur.style.fontWeight="bold"
            erreur.style.color="white"
            erreur.style.marginTop="10px"
        }
    }
    else{
        erreur.innerText="Vos identifiants de connexion sont erronés !"
        erreur.style.fontWeight="bold"
        erreur.style.color="white"
        erreur.style.marginTop="10px"
    }   
})
