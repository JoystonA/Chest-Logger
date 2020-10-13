var inputUsername = document.getElementById('inputUsername');
var inputPassword = document.getElementById('inputPassword');
var connexion = document.getElementById('connexion');

connexion.addEventListener('click',function(){
    if(inputUsername.value==localStorage.getItem('email')){
        var hashPassword = hash(inputPassword.value);
        if(hashPassword==localStorage.getItem('mdp_user')){
            window.location='index.html'
        }
        else{
            console.log('erreur2')
        }
    }
    else{
        console.log('erreur1')
    }
})
