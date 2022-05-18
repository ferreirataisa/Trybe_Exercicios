const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

// function formatedBookNames(array) {
//   return array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
// }
// console.log(formatedBookNames(books));


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

// const novoArray = (array) => {
//   return array.map((book) => {
//     return {
//       author: book.author.name,
//       age: book.releaseYear - book.author.birthYear,
//     }}).sort((obj1, obj2) => obj1.age - obj2.age);
// }

// console.log(novoArray(books));


// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

// const novoArray = (array) => array.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');


// console.log(novoArray(books));


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

// const novoArray = (array) => {
//   return array.filter((book) => {
//     return book.releaseYear < (2022 - 60);
//   }).sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);
// }

// console.log(novoArray(books));


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors(array) {
//   const verifica = array.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
//     return verifica.map((book) => book.author.name).sort()
// }

// console.log(fantasyOrScienceFictionAuthors(books));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// const oldBooks = (array) => array.filter((book) => book.releaseYear < (2022 - 60))
//   .map((book) => book.name)

// console.log(oldBooks(books));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const authorWith3DotsOnName = (array) => array.find((book) => book.author.name.split(' ')
.filter((book) => book.endsWith('.')).length === 3).name;

console.log(authorWith3DotsOnName(books));

// Outra lógica para o exercício 7:

// const authorWith3DotsOnName = (array) => array.find((book) => book.author.name.split('.').length === 4).name

// console.log(authorWith3DotsOnName(books));

// Lógica não dinâmica para o exercício 7:

// const authorWith3DotsOnName = (array) => array.find((book) => book.author.name[7] === '.').name;

// console.log(authorWith3DotsOnName(books));