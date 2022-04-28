// 3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()

const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', enviar);

function enviar (event) {
    event.preventDefault();
}

// 4.Crie um botão que limpe as informações contidas nos campos;

// const botaoApagar = document.getElementById('apagar');

// botaoApagar.addEventListener('click', limpar);

// function limpar() {
//     // form.reset();
//     // ref: https://www.w3schools.com/jsref/met_form_reset.asp
    
//     // ou
    
//     // const txtNome = document.getElementById('nome');
//     // txtNome.value = ''
//     // ou criar uma variavel para cada campo... e adicionar a string vazia!
// }

// Bônus
// 1.A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

const autoriza = document.getElementById('concorda');

if (autoriza.value == 'concordo') {
    botaoEnviar.addEventListener('click', enviar);
}

// 2.Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
