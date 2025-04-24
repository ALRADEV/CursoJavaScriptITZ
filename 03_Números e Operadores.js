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