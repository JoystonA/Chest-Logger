/* -------------------------- VARIABLES ----------------------------------*/
var generator = require('generate-password');
var generate_password_label = document.getElementById('generate_password_label')
var refresh_generation = document.getElementById('refresh_generation')
var copier_mdp = document.getElementById('copier_mdp')
var numbers = document.getElementById('numbers')
var symbols = document.getElementById('symbols')
var lowercase = document.getElementById('lowercase')
var uppercase = document.getElementById('uppercase')

/* ------------------------- TRAITEMENTS --------------------------------*/
numbers.checked = "true"
symbols.checked = "true"
lowercase.checked = "true"
uppercase.checked = "true"

generate_password(numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)

refresh_generation.addEventListener('click',function(){
    generate_password(numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

copier_mdp.addEventListener('click',docopy);

/* -------------------------- FONCTIONS ----------------------------------*/
function docopy() {
    var range = document.createRange();
    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    var selection = window.getSelection();

    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        var result = document.execCommand('copy');
        if (result) {
            copier_mdp.innerText="Copié"
            copier_mdp.style.backgroundColor="green"
            copier_mdp.style.borderColor="green"
            sleep(2000).then(() => {
                copier_mdp.innerText="Copier"
                copier_mdp.style.backgroundColor="#0069d9"
                copier_mdp.style.borderColor="#0069d9"
            });
        }
    }
    catch(err) {
        alert(err);
    }

    selection = window.getSelection();

    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
}

function generate_password(numbers,symbols,lowercase,uppercase){
    try{
        var password = generator.generate({
            length: 20,
            numbers: numbers,
            symbols: symbols,
            lowercase: lowercase,
            uppercase:uppercase
        });
        
        generate_password_label.innerText=password
    }
    catch(e){
        console.log('Erreur : ' + e)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}