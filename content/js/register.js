/* -------------------------- VARIABLES ----------------------------------*/
var createUsername = document.getElementById('createUsername');
var createPassword = document.getElementById('createPassword');
var createConfirmPassword = document.getElementById('createConfirmPassword');
var enregistrer = document.getElementById('enregistrer');

/* ------------------------- TRAITEMENTS --------------------------------*/
enregistrer.addEventListener("click",function(){
    localStorage.setItem('email', createUsername.value)
    if(createPassword.value==createConfirmPassword.value){
        var hashPassword = hash(createPassword.value)
        localStorage.setItem('mdp_user', hashPassword)
        window.location="connexion.html"
    }

    else console.log("error")
})

