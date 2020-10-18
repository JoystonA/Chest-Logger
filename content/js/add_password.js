/* -------------------------- VARIABLES ----------------------------------*/
var nom_site = document.getElementById('nom_site')
var adresse_site = document.getElementById('adresse_site')
var id_save = document.getElementById('id_save')
var mdp_save = document.getElementById('mdp_save')
var ajout_mdp_button = document.getElementById('ajout_mdp_button')
var erreur = document.getElementById('erreur')

/* ------------------------- TRAITEMENTS --------------------------------*/
ajout_mdp_button.addEventListener('click',function(){
    var name_site = 'site_'+nom_site.value
    var name_id = 'id_'+nom_site.value
    var name_mdp = 'pwd_'+nom_site.value
    
    localStorage.setItem(name_site, adresse_site.value)
    localStorage.setItem(name_id, id_save.value)
    localStorage.setItem(name_mdp, mdp_save.value)
})

var nbr_password=0;
var entries = Object.entries(localStorage).length
var id_mdp_array = new Array(); 
let j = 0;
let k = 0;
let l = 0;

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
        id_mdp_array[k][2]=Object.entries(localStorage).sort()[i][1]
        k++;
    }
    if(Object.entries(localStorage).sort()[i][0].substring(0,3)=='pwd'){
        id_mdp_array[l][3]=Object.entries(localStorage).sort()[i][1]
        l++;
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
    //var td_button_pencil = document.createElement('td');
    //var td_button_trash = document.createElement('td');
    var i_eye = document.createElement('i');
    //var i_copy = document.createElement('i');
    //var i_pencil = document.createElement('i');
    //var i_trash = document.createElement('i');

    td_site.innerText = id_mdp_array[x][0].substring(5,id_mdp_array[x][0].length)
    td_url.innerText = id_mdp_array[x][1]
    td_id.innerText = id_mdp_array[x][2]
    td_pwd.innerText = "●●●●●●●●●●●"//id_mdp_array[x][3]

    td_pwd.setAttribute('id','mdp')

    i_eye.setAttribute('class','fas fa-eye perso_eye')
    i_eye.setAttribute('id','voir_mdp')

    //i_copy.setAttribute('class','fas fa-copy perso_eye')
    // i_copy.setAttribute('id','copy_mdp')
    //i_copy.setAttribute('data-target',"#mdp")

    //i_pencil.setAttribute('class','fas fa-pencil-alt perso_pencil')
    //i_pencil.setAttribute('id','modifier_id_mdp')

    //i_trash.setAttribute('class','fas fa-trash-alt perso_trash')
    //i_trash.setAttribute('id','supprimer_id_mdp')

    td_button_eye.appendChild(i_eye)
    //td_button_copy.appendChild(i_copy)
    //td_button_pencil.appendChild(i_pencil)
    //td_button_trash.appendChild(i_trash)

    tr.appendChild(td_site)
    tr.appendChild(td_url)
    tr.appendChild(td_id)
    tr.appendChild(td_pwd)
    tr.appendChild(td_button_eye)
    //tr.appendChild(td_button_copy)
    //tr.appendChild(td_button_pencil)
    //tr.appendChild(td_button_trash)

    table_id_mdp.appendChild(tr)
}
 
/*VOIR MDP*/
for(let y=0;y<id_mdp_array.length;y++){
    voir_mdp[y].addEventListener('click',function(){
        mdp[y].innerText = id_mdp_array[y][3]
        sleep(3000).then(() => {
            mdp[y].innerText = '●●●●●●●●●●●'
        });
    })
}

/*COPY MDP*/

