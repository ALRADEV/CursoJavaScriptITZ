// ForEach - seleciona uma lista de itens
// para fazer algo em cada item, seja falar, adicionar calsee  ou excluir é precisso fazer o loop nos itens

const imgs = document.querySelectorAll('img');

imgs.forEach(function (item) {
    console.log(item);
});

// Parâmetros do forEach
// O primeiro parâmetro é o callback, ou seja, 
// a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

const imgs = document.querySelectorAll('img'); // puxa todas as imagens 

imgs.forEach(function (valorAtual, index, array) {
    console.log(valorAtual); // o item atual no loop
    console.log(index); // o número do index
    console.log(array); // a Array completa é  a mesma coisa de passar o imgs
});

// forEach e Array forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); // para transforma em array (3) {h1,h1,h1}

titulosArray.forEach(function (item) {
    console.log(item);
});

// Arrow Function

// Sintaxe curta em relação a function expression. 
// Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => { // pode adiconar o index, array como argumentos 
    console.log(item); // pode usar return
});

imgs.forEach(item => { // pode se passar assim mas usar sempre com parenteses
    console.log(item);
});

let = i;

imgs.forEach(() => {
    console.log(item);
});

imgs.forEach(item => console.log(item)); // pode se utilizar assim se for so uma linha

// com parenteses 

const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
    console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
    console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

//Return
//É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs = document.querySelectorAll('img');

imgs.forEach(item =>
    console.log(item)
);

imgs.forEach(item => console.log(item));

//Não é permitido fechar a linha com ;

//-------------------------------------------------------------
// exercicios


// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => {
    console.log(item)
});

// Mostre o texto dos parágrafos no console

paragrafo.forEach((item) => {
    console.log(item.innerText)
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => { // fechar parenteses
    console.log(item, index);
});

let i = 0;
imgs.forEach( => { // falta o ()
    console.log(i++);
});

imgs.forEach(() => i++);



