
// TUDO EM JS É UM OBJETO 
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'


var nome = "Alisson";

nome.replace("Alisson", "André");

// O nome é uma string, e possui propriedades e métodos. Por isso é um objeto.
// Uma string herda propriedades e métodos do construtor String()

//Números

var altura = 1.8;

altura.toString(); // '1.8' - transforma o número em string
altura.toFixed(); // '2' - arredonda o número para cima
altura.toFixed(2); // '1.80' - arredonda o número para cima com duas casas decimais

//Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

//FUNÇÕES

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString(); // COLOCA O CÓDIGO DA FUNÇÃO EM UMA STRING
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1 - TEM O NÚMERO DE PARÂMETROS QUE A FUNÇÃO ACEITA NO CASO1 (LADO)

// ELEMENTOS DO DOM SÃO OBJETOS
// O DOM é um objeto que representa a estrutura de um documento HTML. Cada elemento do HTML é um objeto no DOM.
// O DOM é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de nós, onde cada nó é um objeto que representa uma parte do documento. Isso permite que os desenvolvedores acessem e manipulem o conteúdo, a estrutura e o estilo do documento de forma programática. O DOM é uma parte fundamental da programação web, pois permite que os desenvolvedores criem páginas dinâmicas e interativas usando JavaScript.

<a class="btn">Clique</a>

var btn = document.querySelector('.btn');// SELECIONA O ELEMENTO HTML COM A CLASSE btn

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique' - RETORNA O VALOR DO CLIQUE
btn.addEventListener('click', function () {
    console.log('Clicou')
})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

//Objetos revolucionaram a programação
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// exercício 

// nomeie 3 propriedades ou métodos de strings

var nome = "Alisson";

nome.length; // 7 - RETORNA O TAMANHO DA STRING
nome.charAt(1); // 'l' - RETORNA O CARACTERE NA POSIÇÃO 1
nome.slice(0, 3); // 'Ali' - RETORNA A STRING DO ÍNDICE 0 ATÉ O ÍNDICE 3 (NÃO INCLUSO)

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn'); // seleciona o elemento HTML com a classe btn

btn.addEventListener
btn.classList
btn.innerText
btn.innerHTML
btn.style

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


//antes
document.execCommand('copy'); // Copia o texto selecionado para a área de transferência (clipboard)

//depois
navigator.clipboard.writeText('Texto a ser copiado'); // Copia o texto para a área de transferência (clipboard)
