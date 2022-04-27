// 3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()

const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', parar);

function parar (event) {
    event.preventDefault();
}

// 4.Crie um botão que limpe as informações contidas nos campos;

const botaoApagar = document.getElementById('apagar');

botaoApagar.addEventListener('click', limpar);

function limpar() {
    form.reset();
}
// ref: https://www.w3schools.com/jsref/met_form_reset.asp