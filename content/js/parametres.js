var nom_user_parametre = document.getElementById('nom_user_parametre')
var email_user_parametre = document.getElementById('email_user_parametre')

var nom_modif = document.getElementById('nom_modif')
var prenom_modif = document.getElementById('prenom_modif')
var email_modif = document.getElementById('email_modif')

var modifier_cmp = document.getElementById('modifier_cmp')

modifier_cmp.addEventListener('click',function(){
    nom_user_parametre.innerText = nom_modif.value + " " + prenom_modif.value
    email_user_parametre.innerText = email_modif.value

    localStorage.setItem('nom', nom_modif.value);
    localStorage.setItem('prenom',prenom_modif.value);
    localStorage.setItem('email', email_modif.value);
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