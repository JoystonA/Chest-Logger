/* -------------------------- VARIABLES ----------------------------------*/
var generator = require('generate-password');
var generate_password_label = document.getElementById('generate_password_label')
var refresh_generation = document.getElementById('refresh_generation')
var copier_mdp = document.getElementById('copier_mdp')
var numbers = document.getElementById('numbers')
var symbols = document.getElementById('symbols')
var lowercase = document.getElementById('lowercase')
var uppercase = document.getElementById('uppercase')
var slider = document.getElementById('slider')

/* ------------------------- TRAITEMENTS --------------------------------*/
numbers.checked = "true"
symbols.checked = "true"
lowercase.checked = "true"
uppercase.checked = "true"
slider.value = 20;

generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)

refresh_generation.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

numbers.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

symbols.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

lowercase.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

uppercase.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
})

slider.addEventListener('click',function(){
    generate_password(slider.value,numbers.checked,symbols.checked,lowercase.checked,uppercase.checked)
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

function generate_password(lenght,numbers,symbols,lowercase,uppercase){
    try{
        var password = generator.generate({
            length: lenght,
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

$(document).ready(function() {
    const $valueSpan = $('.valueSpan');
    const $value = $('#slider');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
      $valueSpan.html($value.val());
    });
  });