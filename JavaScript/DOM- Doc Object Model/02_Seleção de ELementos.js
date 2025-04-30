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

//Diferente do getElementsByClassName, a lista aqui é estática

//-----------------------------------------------------

//HTMLCollection vs NodeList são array-like
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens - atualiza se acrescentar uma nova classe
console.log(gridSectionNode); // 3 itens - já o node nao atualiza se adicionar uma nova classe em seguida


//-----------------------------------------------------

//Array-Like
//HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// O método de Array forEach() por exemplo, existe apenas em NodeList.
// foreach faz um loop

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function (gridItem, index, array) { // o primeiro argumento é um item
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
});

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

const arrayGrid = Array.from(gridSection) // podendo depois usar o foreach

// EXERCICIOS

// Retorne no console todas as imagens do site

const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const = imagensAnimais = document.querySelectorAll("img[src^='img/imagem']"); // ("img[src^='img/imagem']") = src^= começo e demais informações do item 
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)

const = links = document.querySelectorAll("[href^='#']") // ^ começa com, sem isso é os que teriam o # 
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector(".animis-descrição h2");
console.log(h2Animais) // raposa vem o primeiro wnao todos igual selectorAll
//ou

const animais = document.querySelector(".animis-descrição h2")
const h2Animais = animais.querySelector("h2")


// Selecione o último p do site
const paragrafos = document.querySelectorAll("p")
console.log(paragrafos[paragrafos.length - 1])// lenght mostra o total de itens
//ou 
console.log(paragrafos[--paragrafos.length])