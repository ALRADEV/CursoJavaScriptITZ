// variável serve para armazenar dados e nao repetir código
// var, let e const são palavras reservadas para declarar variáveis         


var nome = "Alison";
var idade = 22;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade); // Imprime Alison 22 true

// outro metodo de declarar variável

var sobrenome = "Almeida",
    cidade = "São Paulo",
    estado = "SP";

console.log(sobrenome, cidade, estado); // Imprime Almeida São Paulo SP


//----------------------------------------------------

//Hoisting - São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nome);
var nome = 'André';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer



//----------------------------------------------------

// Tipos de variáveis

// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

//----------------------------------------------------

// Exercício 1

// Declarar uma variável com o seu nome

const nome = "Alison";

// Declarar uma variável com a sua idade

let idade = 32;

// Declarar uma variável com a sua comida

let comida = "Pizza";

// favorita e não atribuir valor

const comidaFavorita;

// Atribuir valor a sua comida favorita

comidaFavorita = "Pizza";

// Declarar 5 variáveis diferentes sem valores

let corFavorita,
    esporteFavorito,
    livroFavorito,
    filmeFavorito,
    musicaFavorita;
