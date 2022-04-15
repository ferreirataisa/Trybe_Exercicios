// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 8;
const b = 4;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 5
const d = 6

if (c > d) {
    console.log("c é maior que d")
} else {
    console.log("d é maior que c")
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 1;
const b = 2;
const c = 3;

if (a > b && a > c) {
    console.log("a é o maior número");
} else if (b > a && b > c) {
    console.log("b é o maior número")
} else {
    console.log("c é o maior número");
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = -3;

if (a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative");
} else {
    console.log ("zero")
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 45;
const b = 45;
const c = -10;

if ((a + b + c) === 180) {
    console.log("true");
} else if ((a + b + c) !== 180 && a > 0 && b > 0 && c > 0) {
    console.log("false");
} else {
    console.log("ERRO");
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// usar o .toLowerCase

const pecaXadrez = "PEAO".toLowerCase();

if (pecaXadrez === "bispo") {
    console.log("Se movimenta somente na diagonal por todo o tabuleiro");
} else if (pecaXadrez === "rainha") {
    console.log("Se movimenta para qualquer lado e direção");
} else if (pecaXadrez === "torre") {
    console.log("Se movimenta em linha reta ou para os lados, por todas as casas");
} else if (pecaXadrez === "cavalo") {
    console.log("Se movimenta em L");
} else if (pecaXadrez === "rei") {
    console.log("Se movimenta para qualquer lado ou direção, somente de casa em casa");
} else if (pecaXadrez === "peao") {
    console.log("Se movimenta para frente e também pode matar na diagonal peças do time adversário");
} else {    
    console.log("Não é uma peça do jogo de xadrez");
}


// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 80;

if (nota < 0 || nota > 100) {
    console.log("ERRO - Revise sua nota")
} else if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else if (nota >= 60) {
    console.log("Conceito D");
} else if (nota >= 50) {
    console.log("Conceito E");
} else {
    console.log("Conceito F");
}


// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const a = 5;
const b = 2;
const c = 3;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("true");
} else {
    console.log("false");
}


// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const a = 2;
const b = 3;
const c = 4;

if (a % 2 ==! 0 || b % 2 ==! 0 || c % 2 ==! 0) {
    console.log("true")
} else {
    console.log("false")
}


// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const numeroUnidadesProduto = 1000;
const custoProduto = 20;
const valorVenda = 40;
const imposto = 0.2;
const custoProdutoTotal = custoProduto + (custoProduto*imposto);
const lucro = valorVenda - custoProdutoTotal

if (numeroUnidadesProduto > 0) {
    console.log("LUCRO" + " " + (lucro * numeroUnidadesProduto));
} else {
    console.log("ERRO")
}

// // 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 8000.00;
let aliquotaINSS;
let aliquotaIR;

// INSS
if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
};

let salarioBase = salarioBruto - aliquotaINSS;

// IR
if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80; 
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário Líquido: " + (salarioBase - aliquotaIR));