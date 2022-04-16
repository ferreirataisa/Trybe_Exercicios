// arquivo script.js

// Acesse o elemento elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerHTML = "Entrega do projeto Trybe";

// Acesse o primeiroFilho a partir de pai .
const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const textElement = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho .
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.getElementById('pai');

for (let index >= 0; index = pai.childNodes.length - 1; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();