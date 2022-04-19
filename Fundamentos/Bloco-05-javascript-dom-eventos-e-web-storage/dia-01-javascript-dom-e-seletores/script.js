// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTexto() {
    let trocaTexto = document.getElementsByTagName('p')[1];
    trocaTexto.innerHTML = "Trabalhando com tecnologia";
}
mudaTexto();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudaCor() {
    let trocaCor = document.getElementsByClassName('main-content')[0];
    trocaCor.style.background = "rgb(76,164,109";
}
mudaCor();

// Crie uma função que mude a cor do quadrado vermelho para branco.
function outracor() {
    let mudaCor = document.getElementsByClassName('center-content')[0];
    mudaCor.style.background = "white";
}
outracor();

// Crie uma função que corrija o texto da tag <h1>.
function corrigeTexto() {
    let novoTexto = document.getElementsByClassName('title')[0];
    novoTexto.innerHTML = "Exercício 5.1 - JavaScript"
}
corrigeTexto();

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function maiusculo() {
    let letraMaiuscula = document.getElementsByTagName('p')[0];
    letraMaiuscula.innerHTML = letraMaiuscula.innerHTML.toUpperCase();
}
maiusculo();

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function demontrarTag() {
    let mostraTag = document.getElementsByTagName('p');
    for (let index = 0; index < mostraTag.length; index += 1) {
        console.log(mostraTag[index].innerHTML);
    }
}
demontrarTag();

