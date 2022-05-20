// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring.

const myList = [1, 2, 3, 5, 6];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];
// const swap = ([,, a, b, c]) => [c, b, a]; (Se eu quiser ignorar os 2 primeiros números, utilizar as vírgulas!)

console.log(swap(myList));