'use script'

var js_sobrenome;
var js_ano;
var js_senha;

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = 'Dark';
    }
    else {
        this.textContent = 'Light';
    }
    console.log('current class name: ' + className)
})

function gerarSenha(){
    js_sobrenome = String(document.DadosFormulario.f_sobrenome.value);
    js_ano = parseInt(document.DadosFormulario.f_ano.value);

    js_senha = js_ano + js_ano % 2;

    window.alert('Olá ' + js_sobrenome + ', sua senha é ' + js_senha + '.');
}

