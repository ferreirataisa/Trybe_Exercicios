// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest (independente da quantidade de números o rest vai funcionar!)

// escreva sum abaixo
const sum = (...elementos) => {
    return elementos.reduce((acc, curr) => acc + curr)
}

console.log(sum(1,2,4));