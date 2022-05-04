let newTag1 = document.createElement('h1');
newTag1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(newTag1);











// // 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// let newTag = document.createElement('h1');
// newTag.innerText = 'Exercício 5.2 - JavaScript DOM';
// document.body.appendChild(newTag);

// // 2.Adicione a tag main com a classe main-content como filho da tag body ;
// let newTag2 = document.createElement('main');
// newTag2.className = 'main-content';
// document.body.appendChild(newTag2);

// // 3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// let newTag3 = document.createElement('section');
// newTag3.className = 'center-content';
// newTag2.appendChild(newTag3);

// // 4.Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// let newTag4 = document.createElement('p');
// newTag4.innerText = 'Trybe';
// newTag3.appendChild(newTag4);

// // 5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// let newTag5 = document.createElement('section');
// newTag5.className = 'left-content';
// newTag2.appendChild(newTag5);

// // 6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// let newTag6 = document.createElement('section');
// newTag5.className = 'right-content';
// newTag2.appendChild(newTag6);

// // 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// let novaImagem = document.createElement('img');
// novaImagem.className = 'small-image';
// novaImagem.src = 'https://picsum.photos/200';
// newTag5.appendChild(novaImagem);

// // 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// let novaLista = document.createElement('ul');
// newTag6.appendChild(novaLista);
// let valoresNovaLista = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
// for (let index = 0; index < valoresNovaLista.length; index += 1) {
//     let listaLi = document.createElement('li');
//     listaLi.innerHTML = valoresNovaLista[index];
//     novaLista.appendChild(listaLi);
// }
// // // ?9.Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// // let novasTags = document.createElement('h3');
// // newTag2.appendChild(novasTags);

