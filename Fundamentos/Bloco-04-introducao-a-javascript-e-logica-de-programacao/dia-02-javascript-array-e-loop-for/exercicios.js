// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Questão 1

// for(index=0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }


// Questão 2

// let somaNumbers = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//     somaNumbers += numbers[index];    
// }
// console.log(somaNumbers);


// Questão 3

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let somaNumbers = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//     somaNumbers += numbers[index];    
// }
    
// let mediaNumbers = somaNumbers / numbers.length;

// console.log(mediaNumbers);


// Questão 4
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let somaNumbers = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//     somaNumbers += numbers[index];    
// }
    
// let mediaNumbers = somaNumbers / numbers.length;

// if (mediaNumbers > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

// Questão 5
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maiorNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumber) {
//         maiorNumber = numbers[index];
//     }
// }

//     console.log(maiorNumber);


// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let imparNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {
    
//     if ((numbers[index] % 2) !== 0) {
//         imparNumber += 1;
//     }
// }
    
//     if (imparNumber > 0) {
//         console.log(imparNumber);
//     } else {
//     console.log("Nenhum valor impar encontrado")
//     }


// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let menorNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < menorNumber) {
//         menorNumber = numbers[index];
//     }
// }
//     console.log(menorNumber);


// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let numeros = [];

// for (let index = 1; index <= 25; index += 1) {
//     numeros.push(index);
// }

// // console.log(numeros);

// // 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// for (let index = 0; index < numeros.length; index += 1) {
//     console.log(numeros[index] / 2);
// }
