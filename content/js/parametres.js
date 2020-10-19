/* -------------------------- VARIABLES ----------------------------------*/
var nom_user_parametre = document.getElementById('nom_user_parametre')
var email_user_parametre = document.getElementById('email_user_parametre')
var nom_modif = document.getElementById('nom_modif')
var prenom_modif = document.getElementById('prenom_modif')
var email_modif = document.getElementById('email_modif')
var ancien_mdp = document.getElementById('ancien_mdp')
var nouveau_mdp = document.getElementById('nouveau_mdp')
var confirmation_nouveau_mdp = document.getElementById('confirmation_nouveau_mdp')

var modifier_cmp = document.getElementById('modifier_cmp')
var modifier_mdp = document.getElementById('modifier_mdp')

var erreur = document.getElementById('erreur');
var erreur2 = document.getElementById('erreur2');

var regex = /^[a-zA-Z0-9éèàêâùïüëçÀÂÉÈÊËÏÙÜ\s-.:,'"–]{1,10000}$/
var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* ------------------------- TRAITEMENTS --------------------------------*/
/* ----------------------- MODIFIER COMPTE ------------------------------*/
modifier_cmp.addEventListener('click',function(){
    nom_user_parametre.innerText = nom_modif.value + " " + prenom_modif.value
    email_user_parametre.innerText = email_modif.value

    if(verify_textarea(nom_modif.value,regex,nom_modif)&&verify_textarea(prenom_modif.value,regex,prenom_modif)&&verify_textarea(email_modif.value,regex_email,email_modif)){
        localStorage.setItem('nom', nom_modif.value);
        localStorage.setItem('prenom',prenom_modif.value);
        localStorage.setItem('email', email_modif.value);
    
        erreur2.innerText="La modification du compte a été enregistrée !"
        erreur2.style.fontWeight="bold"
        erreur2.style.color="green"
        erreur2.style.marginTop="10px"
        sleep(500).then(() => {
            $('#modifier_cmp_user').modal('hide');
            erreur2.innerText=""
        });
    }
    else{
        erreur2.innerText="La modification du compte a échouée !"
        erreur2.style.fontWeight="bold"
        erreur2.style.color="red"
        erreur2.style.marginTop="10px"
    }    
})

if((localStorage.getItem('nom')&&localStorage.getItem('prenom'))!=null){
    nom_user_parametre.innerText=localStorage.getItem('nom')+" "+localStorage.getItem('prenom')
    nom_modif.value = localStorage.getItem('nom') 
    prenom_modif.value = localStorage.getItem('prenom')
}

if(localStorage.getItem('email')!=null){
    email_user_parametre.innerText=localStorage.getItem('email')
    email_modif.value = localStorage.getItem('email')
}

verify_textarea(nom_modif.value,regex,nom_modif)
verify_textarea(prenom_modif.value,regex,prenom_modif)
verify_textarea(email_modif.value,regex_email,email_modif)

nom_modif.addEventListener('keyup',function(event){
    verify_textarea(nom_modif.value,regex,nom_modif)
}) 

prenom_modif.addEventListener('keyup',function(event){
    verify_textarea(prenom_modif.value,regex,prenom_modif)
}) 

email_modif.addEventListener('keyup',function(event){
    verify_textarea(email_modif.value,regex_email,email_modif)
}) 

/* ------------------------- MODIFIER MDP ------------------------------*/

modifier_mdp.addEventListener('click',function(){
    if(hash(ancien_mdp.value)==localStorage.getItem('mdp_user')){
        if(nouveau_mdp.value==confirmation_nouveau_mdp.value){
            var nouveau_mdp_hash = hash(nouveau_mdp.value)
            localStorage.setItem('mdp_user', nouveau_mdp_hash);
            erreur.innerText="La modification du mot de passe a été enregistrée !"
            erreur.style.fontWeight="bold"
            erreur.style.color="green"
            erreur.style.marginTop="10px"
            sleep(500).then(() => {
                $('#modifier_mdp_user').modal('hide');
                ancien_mdp.value=""
                nouveau_mdp.value=""
                confirmation_nouveau_mdp.value=""
                erreur.innerText=""
            });
        }
        else{
            erreur.innerText="La modification du mot de passe a échouée !"
            erreur.style.fontWeight="bold"
            erreur.style.color="red"
            erreur.style.marginTop="10px"
        }
    }
    else{
        erreur.innerText="La modification du mot de passe a échouée !"
        erreur.style.fontWeight="bold"
        erreur.style.color="red"
        erreur.style.marginTop="10px"
    }
})
