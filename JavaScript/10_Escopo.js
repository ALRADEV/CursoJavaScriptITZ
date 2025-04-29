//Escopo de Função - ecitar conflito de nome

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//--------------------------------------------------------------

//Variável Global (Erro)

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

'use strict' // isso deixa o erro nao aconteça avisando que não esta definido ou avisando que esta sendo chamado dentro da função

function mostrarCarro() {
  carro = 'Fusca'; // sem colocar let var ou const vira global e pode ser chamdda em qualquer hora mesmo na função
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

//'use strict' impede isso. 


//----------------------------------------------------------------------

// Escopo de Função (Pai) - Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

//---------------------------------------------------------------------------   

// Escopo de Bloco - vendo o if ou loop ou abertura de chaves
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 
// a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

{
  var mes = "Dezembro"
  console.log(mes)
}

console.log(mes)

// não é o correto 

// outro exemplo 

if (true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined quer dizer que criou mas nao definiu pq esta vazando 


// a variavel nao poderia vazar , mas é um erro do js onde implementou o const e let onde respeita

//UTILIZANDO AS MESMA FORM SEM VAZAR 
// A partir de agora vamos utilizar apenas const e let para declarmos variáveis

if (true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined - dando erro sendo possiverl pegar a variavel so estando fora

// {} cria um bloco
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

// For Loop - Ao utilizar var dentro de um forloop, que é um bloco, 
// o valor do variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
// VAZA  O LOOP e Vem com o valor atulizado, dando erro se utilizar o i para algo


//------------------------------------------------------------------------------------

// CONST - valor constante, não muda
//Mantém o escopo no bloco, 
// impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = { // não consigo alterar o objeto data para uma strin ou qualquer outra coisa
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

//------------------------------------------------------------------------------

//LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
//Geralmente vamos utilizar o const.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável


// EXERCICIO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
//R: pois var não é a variavel e sim cor, e o const e let não deixa vazar(pinta de cinza) o valor da variavel dentro do bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
// Declarando o const fora da função

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// correção

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
} // o que é feito  dentro do bloco funciona so ali dentro

const total = 10 * numero;
console.log(total);
