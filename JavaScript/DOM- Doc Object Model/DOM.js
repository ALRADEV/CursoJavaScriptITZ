
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

    document.body // retorna o body do html

//-------------------------------------------------------------------------

