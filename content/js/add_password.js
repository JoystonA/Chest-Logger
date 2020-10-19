/* -------------------------- VARIABLES ----------------------------------*/
var nom_site = document.getElementById('nom_site')
var adresse_site = document.getElementById('adresse_site')
var id_save = document.getElementById('id_save')
var mdp_save = document.getElementById('mdp_save')

var nom_site_modif = document.getElementById('nom_site_modif')
var adresse_site_modif = document.getElementById('adresse_site_modif')
var id_save_modif = document.getElementById('id_save_modif')
var mdp_save_modif = document.getElementById('mdp_save_modif')

var ajout_mdp_button = document.getElementById('ajout_mdp_button')
var modifier_mdp_button = document.getElementById('modifier_mdp_button')

var erreur = document.getElementById('erreur')
var erreur2 = document.getElementById('erreur2')

var regex = /^[a-zA-Z0-9éèàêâùïüëçÀÂÉÈÊËÏÙÜ@\s-.:,'"–]{1,10000}$/

var id_choice;
/* ------------------------- TRAITEMENTS --------------------------------*/
ajout_mdp_button.addEventListener('click',function(){
    var name_site = 'site_'+nom_site.value
    var name_id = 'id_'+nom_site.value
    var name_mdp_iv = 'pwd_iv_'+nom_site.value
    var name_mdp_enc = 'pwd_enc_'+nom_site.value
    var name_mdp_key = 'pwd_key_'+nom_site.value

    if(verify_textarea(nom_site.value,regex,nom_site)&&verify_textarea(adresse_site.value,regex,adresse_site)&&verify_textarea(id_save.value,regex,id_save)){
        var enc = encrypt(mdp_save.value);

        localStorage.setItem(name_site, adresse_site.value)
        localStorage.setItem(name_id, id_save.value)
        localStorage.setItem(name_mdp_iv, enc.iv)
        localStorage.setItem(name_mdp_enc, enc.encryptedData)
        localStorage.setItem(name_mdp_key, enc.key)
        erreur.innerText="L'ajout du mot de passe a été enregistrée !"
        erreur.style.fontWeight="bold"
        erreur.style.color="green"
        erreur.style.marginTop="10px"
        sleep(500).then(() => {
            window.location='index.html'
        });  
    }
    else{
        erreur.innerText="L'ajout du mot de passe a échouée !"
        erreur.style.fontWeight="bold"
        erreur.style.color="red"
        erreur.style.marginTop="10px"
    }
})

nom_site.addEventListener('keyup',function(event){
    verify_textarea(nom_site.value,regex,nom_site)
}) 

adresse_site.addEventListener('keyup',function(event){
    verify_textarea(adresse_site.value,regex,adresse_site)
}) 

id_save.addEventListener('keyup',function(event){
    verify_textarea(id_save.value,regex,id_save)
}) 

var nbr_password=0;
var entries = Object.entries(localStorage).length
var id_mdp_array = new Array(); 
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;

/*NB PASSWORD*/
for(let i=0;i<entries;i++){
    if(Object.entries(localStorage)[i][0].substring(0,4)=='site'){
        nbr_password++;
    }
}

/*TABLEAUX A 2D*/
for(let i=0;i<nbr_password;i++){
    id_mdp_array[i] = new Array();
}

/*RECUEPERATION ID/MDP*/
for(let i=0;i<entries;i++){
    if(Object.entries(localStorage).sort()[i][0].substring(0,4)=='site'){
        id_mdp_array[j][0]=Object.entries(localStorage).sort()[i][0]
        id_mdp_array[j][1]=Object.entries(localStorage).sort()[i][1]
        j++
    }
    if(Object.entries(localStorage).sort()[i][0].substring(0,2)=='id'){
        id_mdp_array[k][2]=Object.entries(localStorage).sort()[i][0]
        id_mdp_array[k][3]=Object.entries(localStorage).sort()[i][1]
        k++;
    }
    if(Object.entries(localStorage).sort()[i][0].substring(0,6)=='pwd_iv'){
        id_mdp_array[l][4]=Object.entries(localStorage).sort()[i][0]
        id_mdp_array[l][5]=Object.entries(localStorage).sort()[i][1]
        l++;
    }
    if(Object.entries(localStorage).sort()[i][0].substring(0,7)=='pwd_enc'){
        id_mdp_array[m][6]=Object.entries(localStorage).sort()[i][0]
        id_mdp_array[m][7]=Object.entries(localStorage).sort()[i][1]
        m++;
    }
    if(Object.entries(localStorage).sort()[i][0].substring(0,7)=='pwd_key'){
        id_mdp_array[n][8]=Object.entries(localStorage).sort()[i][0]
        id_mdp_array[n][9]=Object.entries(localStorage).sort()[i][1]
        n++;
    }
}

for(x=0;x<id_mdp_array.length;x++){
    var table_id_mdp = document.getElementById('table_id_mdp').children[1];
    var tr = document.createElement('tr');
    tr.setAttribute('id',x)

    var td_site = document.createElement('td');
    var td_url = document.createElement('td');
    var td_id = document.createElement('td');
    var td_pwd = document.createElement('td');
    var td_button_eye = document.createElement('td');
    //var td_button_copy = document.createElement('td');
    var td_button_pencil = document.createElement('td');
    var td_button_trash = document.createElement('td');
    var i_eye = document.createElement('i');
    //var i_copy = document.createElement('i');
    var i_pencil = document.createElement('i');
    var i_trash = document.createElement('i');

    td_site.innerText = id_mdp_array[x][0].substring(5,id_mdp_array[x][0].length)
    td_url.innerText = id_mdp_array[x][1]
    td_id.innerText = id_mdp_array[x][3]
    td_pwd.innerText = "●●●●●●●●●●●"//id_mdp_array[x][3]

    td_pwd.setAttribute('id','mdp')

    i_eye.setAttribute('class','fas fa-eye perso_eye')
    i_eye.setAttribute('id','voir_mdp')

    //i_copy.setAttribute('class','fas fa-copy perso_eye')
    //i_copy.setAttribute('id','copy_mdp')
    //i_copy.setAttribute('data-target',"#mdp")

    i_pencil.setAttribute('class','fas fa-pencil-alt perso_pencil')
    i_pencil.setAttribute('id','modifier_id_mdp')
    //i_pencil.setAttribute('data-target',"#modifier_mdp")

    i_trash.setAttribute('class','fas fa-trash-alt perso_trash')
    i_trash.setAttribute('id','supprimer_id_mdp')

    td_button_eye.appendChild(i_eye)
    //td_button_copy.appendChild(i_copy)
    td_button_pencil.appendChild(i_pencil)
    td_button_trash.appendChild(i_trash)

    tr.appendChild(td_site)
    tr.appendChild(td_url)
    tr.appendChild(td_id)
    tr.appendChild(td_pwd)
    tr.appendChild(td_button_eye)
    //tr.appendChild(td_button_copy)
    tr.appendChild(td_button_pencil)
    tr.appendChild(td_button_trash)

    table_id_mdp.appendChild(tr)
}
 
/*VOIR MDP*/
if(id_mdp_array.length!=1) {
    for(let y=0;y<id_mdp_array.length;y++){
        voir_mdp[y].addEventListener('click',function(){
            mdp[y].innerText = decrypt({iv: id_mdp_array[y][5], encryptedData: id_mdp_array[y][7], key: id_mdp_array[y][9]})
            sleep(3000).then(() => {
                mdp[y].innerText = '●●●●●●●●●●●'
            });
        })
    }
}
else{
    voir_mdp.addEventListener('click',function(){
        mdp.innerText = decrypt({iv: id_mdp_array[0][5], encryptedData: id_mdp_array[0][7], key: id_mdp_array[0][9]})
        sleep(3000).then(() => {
            mdp.innerText = '●●●●●●●●●●●'
        });
    })
}

/*MODIFIER MDP*/
if(id_mdp_array.length!=1) {
    for(let y=0;y<id_mdp_array.length;y++){
        modifier_id_mdp[y].addEventListener('click',function(){
            $('#modifier_mdp').modal('show');
            nom_site_modif.value=id_mdp_array[y][0].substring(5,id_mdp_array[y][0].length)
            adresse_site_modif.value=id_mdp_array[y][1]
            id_save_modif.value=id_mdp_array[y][3]
            id_choice = modifier_id_mdp[y].parentElement.parentElement.id
            verify_textarea(adresse_site_modif.value,regex,adresse_site_modif)
            verify_textarea(id_save_modif.value,regex,id_save_modif)
        })
    }
}
else {
    modifier_id_mdp.addEventListener('click',function(){
        $('#modifier_mdp').modal('show');
        nom_site_modif.value=id_mdp_array[0][0].substring(5,id_mdp_array[0][0].length)
        adresse_site_modif.value=id_mdp_array[0][1]
        id_save_modif.value=id_mdp_array[0][3]
        id_choice = modifier_id_mdp.parentElement.parentElement.id
        verify_textarea(adresse_site_modif.value,regex,adresse_site_modif)
        verify_textarea(id_save_modif.value,regex,id_save_modif)
    })
    
}   

modifier_mdp_button.addEventListener('click',function(){
    if(verify_textarea(adresse_site_modif.value,regex,adresse_site_modif)&&verify_textarea(id_save_modif.value,regex,id_save_modif)){
        var enc_modif = encrypt(mdp_save_modif.value)
    
        localStorage.setItem(id_mdp_array[id_choice][0], adresse_site_modif.value)
        localStorage.setItem(id_mdp_array[id_choice][2], id_save_modif.value)
        localStorage.setItem(id_mdp_array[id_choice][4], enc_modif.iv)
        localStorage.setItem(id_mdp_array[id_choice][6], enc_modif.encryptedData)
        localStorage.setItem(id_mdp_array[id_choice][8], enc_modif.key)
        erreur2.innerText="La modification du mot de passe a été enregistrée !"
        erreur2.style.fontWeight="bold"
        erreur2.style.color="green"
        erreur2.style.marginTop="10px"
        sleep(500).then(() => {
            window.location='index.html'
        });  
    }
    else{
        erreur2.innerText="La modification du mot de passe a échouée !"
        erreur2.style.fontWeight="bold"
        erreur2.style.color="red"
        erreur2.style.marginTop="10px"
    }
})

adresse_site_modif.addEventListener('keyup',function(event){
    verify_textarea(adresse_site_modif.value,regex,adresse_site_modif)
}) 

id_save_modif.addEventListener('keyup',function(event){
    verify_textarea(id_save_modif.value,regex,id_save_modif)
}) 


/*SUPPRIMER MDP*/
if(id_mdp_array.length!=1) {
    for(let y=0;y<id_mdp_array.length;y++){
        supprimer_id_mdp[y].addEventListener('click',function(){
            window.localStorage.removeItem(id_mdp_array[y][0]);
            window.localStorage.removeItem(id_mdp_array[y][2]);
            window.localStorage.removeItem(id_mdp_array[y][4]);
            window.localStorage.removeItem(id_mdp_array[y][6]);
            window.localStorage.removeItem(id_mdp_array[y][8]);
            window.location='index.html'
        })
    }
}
else{
    supprimer_id_mdp.addEventListener('click',function(){
        window.localStorage.removeItem(id_mdp_array[0][0]);
        window.localStorage.removeItem(id_mdp_array[0][2]);
        window.localStorage.removeItem(id_mdp_array[0][4]);
        window.localStorage.removeItem(id_mdp_array[0][6]);
        window.localStorage.removeItem(id_mdp_array[0][8]);
        window.location='index.html'
    })
}
