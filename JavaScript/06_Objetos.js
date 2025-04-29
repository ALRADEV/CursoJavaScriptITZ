//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {  // obejto recebe chaves , propriedade e valores
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
}

// retrornando o valor do objeto, nome do objeto + nome da propriedade
console.log(pessoa.nome); // 'André'
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true


//---------------------------------------------------------------------------

//MÉTODOS
//É uma propriedade que possui uma função no local do seu valor.
// São funções que estão dentro de um objeto, são chamadas de métodos.

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado; // 
    },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// O this é uma palavra reservada que faz referência ao objeto que está chamando o método.
// No caso do exemplo, o this.lados faz referência ao quadrado.lados, ou seja, 4.
//  O this é muito utilizado para fazer referência a propriedades de um objeto dentro de um método.

//Abreviação de area: function() {} para area() {}

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
}


// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório de 0 a 1

var pi = Math.PI;
console.log(pi); // 3.14

Console.log(Math.random()); // 0.123456789

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

//---------------------------------------------------------------------------
//Criar um Objeto - Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

//Dot Notation Get  - Acessar e modificar propriedades de um objeto
// Acessar propriedades de um objeto utilizando o ponto (.) e o nome da propriedade.   

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// Dot Notation Set - Substitua o valor de uma propriedade utilizando . e o = após a propriedade.

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000'; // substitui o valor da propriedade backgroundColor de #84E para #000
console.log(menu.backgroundColor); // '#000'

//---------------------------------------------------------------------------  

// adicionando uma nova propriedade ao objeto e função


menu.color = '#fff'; // adiciona a propriedade color ao objeto menu
console.log(menu.color); // '#fff'
console.log(menu); // { width: 800, height: 50, backgroundColor: '#000', color: '#fff' }

menu.esconder = function () { // adiciona a função esconder ao objeto menu
    console.log('Escondi o menu!');
}

menu.esconder(); // 'Escondi o menu!'
//---------------------------------------------------------------------------   

//Palavra-chave this - irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2;
    }
}

menu.metadeHeight(); // 25
// sem o this, seria 60, pois ele não faz referência ao objeto menu, e sim a variável height que está fora do objeto.
//---------------------------------------------------------------------------

// PROTOTIPO E HERANÇA
// O que é um protótipo?
// É um objeto que serve como modelo para outro objeto. O protótipo é um objeto que contém propriedades e métodos que podem ser herdados por outros objetos.
// O QUE É HERANÇA?
// É quando um objeto herda propriedades e métodos de outro objeto. Isso é feito através do protótipo. O objeto que herda é chamado de objeto filho e o objeto que é herdado é chamado de objeto pai.

var menu = {
    width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

// Todo objeto herda a prpriedade do obejto pai, que é o objeto Object.
// O objeto Object é o objeto pai de todos os objetos em JavaScript.
// O objeto Object possui propriedades e métodos que podem ser herdados por outros objetos.
// O método hasOwnProperty() é um deles verifica se o objeto possui a propriedade especificada. Se o objeto possui a propriedade, o método retorna true. Caso contrário, retorna false.


//---------------------------------------------------------------------------

// EXERCICIO 

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


const dadosPessoais = {
    nome: "Alisson",
    sobrenome: "Assis",
    idade: 32,
    profissao: "Desenvolvedor",
    possuiFaculdade: true,
}



// Crie um método no objeto anterior, que mostre o seu nome completo


dadosPessoais.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
}

console.log(dadosPessoais.nomeCompleto()); // Alisson Assis


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: "Labrador",
    cor: preto,
    idade: 10,
    serveComo: "Cão guia",

    lateQuandoVê(pessoa) {
        if (pessoa === "homem") {
            return "Au Au!";
        } else {
            return "Silêncio!";
        }
    }
}

console.log(cachorro.lateQuandoVê("homem")); // Au Au!
console.log(cachorro.lateQuandoVê("mulher")); // Silêncio!

//---------------------------------------------------------------------------


