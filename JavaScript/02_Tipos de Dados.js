// PRIMITIVOS - dados imutáveis
// são dados que não podem ser alterados e não possuem métodos e não são objetos

var nome = 'André';    // String
var idade = 28;     // Number
var possuiFaculdade = true;     // Boolean
var time;                       // Undefined
var comida = null;    // Null
var simbolo = Symbol()    // Symbol
var novoObjeto = {}    // Object


// verificar o tipo de dado
// typeof - operador que retorna o tipo de dado

console.log(typeof nome, typeof idade, typeof possuiFaculdade,
    typeof time, typeof comida, typeof simbolo, typeof novoObjeto
);     // string number boolean undefined object object object


// Somando STRING e NUMBER

let nome = 'Alison';
let sobrenome = 'Lincoln';

const nomeCompleto = nome + ' ' + sobrenome; // Concatenação
console.log(nomeCompleto); // Imprime Alison Lincoln    

let gols = 1000;
let frase = 'Romário fez ' + gols + ' gols'; // Concatenação
//OU
let frase = `Romário fez ${gols} gols`; // Template String (interpolação)

console.log(frase); // Imprime Romário fez 1000 gols // STRING + NUMBER = STRING

//Aspas Duplas, Simples e Template String

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido


//EXERCÍCIO 2

// Declare uma variável contendo uma string

Let nome = "Alison";

// Declare uma variável contendo um número dentro de uma string

let idade = "32";

// Declare uma variável com a sua idade

let idade = 32;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

let nome = "Alison";
let sobrenome = "Lincoln";

let nomeCompleto = nome + " " + sobrenome;

// Coloque a seguinte frase em uma variável: It's time

let frase = "It's time";
//ou
Let frase = 'It\'s time'; // Escape
//ou    
let frase = `It's time`; // Template String

// Verifique o tipo da variável que contém o seu nome

let nome = Alisson;
console.log(typeof nome);
