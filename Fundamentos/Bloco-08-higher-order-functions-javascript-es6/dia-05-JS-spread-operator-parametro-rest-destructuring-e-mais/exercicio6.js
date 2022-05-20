// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([modelo, marca, ano]) => ({marca, modelo, ano});

console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));



// outro jeito de fazer
const obj = (...arr) => {
  const carros = {};
  arr.forEach(([modelo, marca, ano]) => {
    carros[marca] = {modelo: modelo, ano: ano}
})
return carros;
}

console.log(obj(palio, shelbyCobra, chiron))
