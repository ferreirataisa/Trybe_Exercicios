let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
ondeVoceEsta.parentNode.style.color = 'blue';

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = "Silêncio, estou estudando."

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let pai = document.getElementById('pai');
let irmao = document.getElementById('elementoOndeVoceEsta');
irmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmao); 

let filho = document.getElementById('elementoOndeVoceEsta');
filho.id = 'filhoElementoOndeVoceEsta';

