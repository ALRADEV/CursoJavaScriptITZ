
// Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML através de objetos. 
//Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser


//window.innerHeigth - .innerHeigth  propriedade
// se tem o () na frente é um metodo

//-------------------------------------------------------------
// WINDOW E DOCUMENT

// no console o elements seria o DOM
// cada elemento possui metodos e propriedade que consegue manipular
// f: siginifca um metodo

window.alert("Atenção") // metodo atraves do DOM

window.alert('Isso é um alerta');

alert('Isso é um alerta'); // Funciona dessa forma tbm

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body


// pode um objeto dentro de outro como a propriedade location

window.Location// Aparece um objeto  com as informações
window.Location.href // pode ir acessando os outros obejetos e propriedades dentro 

//----------------------------------------------------------------------

document.querySelector("h1"); // quando nao tem classe ou id não consegue fazer nadao pois nao tem acesso precisa criar uma vareavel
//document.querySelector(".btn");// classe ou id

const h1Selecionado = document.querySelector("h1"); // criando variavel para pegar os valores
// volta o valor da tag <h1> Titulo </h1>

h1Selecionado.// seleciona as propriedade e metodos

const h1Classes = h1Selecionado.classList// etc

document.body // retorna o body do html

//-------------------------------------------------------------------------

//NODE .Toda tag html é representada pelo objeto 
// Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

Element // objeto 

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

function callbackh1() {
    console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1)

//------------------------------------------------------

// Retorne o url da página atual utilizando o objeto window

const UrlPaginaAtual = window.location.href;
console.log(UrlPaginaAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const pimeiroElemento = document.querySelector(".btn")// seleciona o primeiro elemento

// Retorne a linguagem do navegador

const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);


// Retorne a largura da janela 

const larguraJanela = window.innerWidth;
console.log(larguraJanela)


