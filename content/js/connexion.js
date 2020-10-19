/* -------------------------- VARIABLES ----------------------------------*/
var inputUsername = document.getElementById('inputUsername');
var inputPassword = document.getElementById('inputPassword');
var connexion = document.getElementById('connexion');
var erreur = document.getElementById('erreur');
var register = document.getElementById('register');
var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* ------------------------- TRAITEMENTS --------------------------------*/
connexion.addEventListener('click',function(){
    if(inputUsername.value==localStorage.getItem('email')&&verify_input(inputUsername.value,regex_email,inputUsername)){
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

if((localStorage.getItem('email')&&localStorage.getItem('mdp_user'))!=null){
    register.style.display = "none"
}

register.addEventListener("click",function(){
    window.location="register.html"
})

inputUsername.addEventListener('keyup',function(event){
    verify_input(inputUsername.value,regex_email,inputUsername)
})