// Tipos sem ser String

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000


// Operadores Aritméticos
// +, -, *, /, **, %     -> + em strings é concatenação

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4  o resto da divisão entre 14 e 5 é 4


// Operadores Aritméticos com Strings
// +, -, *, /, **, %

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number/ Não é um numero) É possível verificar se uma variável é NaN ou não com a função isNaN()

var testeNaN = 'Comprei 10' / 2;
console.log(isNaN(testeNaN)); // true

// A Ordem importa como na Matemática

var total1 = 20 + 5 * 2; // 30  // Multiplicação antes da soma
var total2 = (20 + 5) * 2; // 50 // Parenteses é prioridade Soma antes da multiplicação
var total3 = 20 / 2 * 5; // 50 // Na ordem da multiplicação e divisão não importa, o resultado é o mesmo
var total4 = 10 + 10 * 2 + 20 / 2; // 40  multiplicação e divisão antes da soma


// Operadores Aritméticos Unários

// INCREMENTO ++ e DECREMENTO --   

let X = 5; // 5
x = X + 1; // 6 é como se repressentasse o valor de X

console.log(X++); // 5  (X = 6) RETORNA O VALOR ANTES DO INCREMENTO
console.log(++X); // 6  (X = 6) RETORNA O VALOR DEPOIS DO INCREMENTO
console.log(X); // 6  (X = 6)

// dEcremento --

let Y = 5; // 5 
Y = Y - 1; // 4 é como se repressentasse o valor de Y
console.log(Y--); // 5  (Y = 4) RETORNA O VALOR ANTES DO DECREMENTO 
console.log(--Y); // 4  (Y = 4) RETORNA O VALOR DEPOIS DO DECREMENTO
console.log(Y); // 4  (Y = 4)

// Operadores Aritmeticos Unários 
// + e - (sinal de mais e menos)  
// Não são incrementos ou decrementos, são apenas para transformar o valor em número

var frase = 'Isso é um teste'; // Nesse caso a variável frase é uma string não numérica
+frase; // NaN
-frase; // NaN 

var idade = '28'; // string numérica retorna um numero  
+idade; // 28 (número) ou  idade = +'28' // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33  transforma a string em número e soma 5
console.log(-idade + 5); // -23 transforma a string em número e subtrai 5

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Mais Operadores Aritméticos
"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators"

// Exercício 3

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35 primeiro multiplica divide e soma

// Crie duas expressões que retornem NaN

var expressao1 = "Comprei 10  camisas" / 2; // NaN
var expressao2 = "10 pares de calçados" * 2; // NaN

// Somar a string '200' com o número 50 e retornar 250

var soma = "200"
console.log(+soma + 50); // 250  transforma a string em número e soma 50
//ou

var soma = + "200"
console.log(soma + 50);

// Incremente o número 5 e retorne o seu valor incrementado

var numeroParaIncrementar = 5;
console.log(++numeroParaIncrementar); // 6 

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = +'80' / 2;

console.log(peso); // 40