// ID
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
// retorna tudo daquele elemento. casdo queria selecionar uma propriedade só bastar dar o . e selecionar


// Retorna null caso não exista
const naoExiste = document.getElementById('teste');


//-----------------------------------------------------

//Classe e Tag
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. 
// A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');

const contato = document.getElementsByClassName('grid-section contato');// seleciona o que tem as duas classes juntas

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');// seleciona todas as ul do site, passando com se fosse um array

// Retorna o primeiro elemento
console.log(gridSection[0]);


//-----------------------------------------------------

// SELETOR GERAL UNICO - QUERYSELECTOR
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

// QUERYSELECTORALL - SELECIONA TODOS OD ELEMENTOS

const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
// NO caso da seleção nesse momento, por mais que eu acrescente algo nesse contexto ele so traz o que foi selecionado conforme estava no momento,
//não atualizando. se foi selecionado 6 itens e adiciono um abaixo ele nao atualizara diferente do class e tag

// Retorna o segundo elemento
console.log(gridSection[1]);
