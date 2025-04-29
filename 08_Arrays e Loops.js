// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// Acesse um elemento da array utilizando [n]

// Métodos e Propriedades de uma Array

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele (XBox) fica apenas o Switch e PS4
videoGames.shift(); // Remove o primeiro item e retorna ele (Switch)
videoGames.push('3DS'); // Adiciona ao final da array ficando [PS4, 3DS]
videoGames.unshift('PS5'); // Adiciona ao início da array ficando [PS5, PS4, 3DS]
videoGames.reverse(); // Inverte a ordem da array ficando [3DS, PS4, PS5]
videoGames.sort(); // Ordena a array em ordem alfabética ficando [3DS, PS4, PS5]
videoGames.length; // 3
videoGames[0]; // Switch

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente


// For Loop - Fazem algo repetidamente até que uma condição seja atingida.

for (let numero = 0; numero < 10; numero++) { // numero ou i 
    console.log(numero);
}
// Retorna de 0 a 9 no console

//O for loop possui 3 partes, início, condição e incremento

//  While Loop
// O for loop é o mais comum, mas o while loop é mais flexível e pode ser usado em situações onde não sabemos quantas vezes precisamos repetir um bloco de código.
// O while loop continua executando enquanto a condição for verdadeira.


var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console


// ARRAYS E LOOPS

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) { // videoGames.length retorna o tamanho da array que é 4'
    console.log(videoGames[i]); // Retorna cada elemento da array no console
    // videoGames[0] = Switch 
    // videoGames[1] = PS4
    // videoGames[2] = XBox  
    // videoGames[3] = 3DS
}

// Retorna todos os elementos da array no console

// Break
// O loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    // Retorna cada elemento da array no console
    if (videoGames[i] === 'PS4') {
        break;
        // O loop irá parar caso encontre a palavra PS4
    }
}

// forEach
//forEach é um método que executa uma função para cada item da Array. 
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)


var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

videoGames.forEach(function (item) { // O forEach recebe uma função como argumento e executa essa função para cada item da array
    // no lugar do item, poderia ser qualquer nome, como i ou videoGame ou ates mesmo um nome nada a ver com o que está dentro da array
    // porem como boa pratica, o nome do argumento deve ser algo relacionado ao que está dentro da array

    console.log(item);
});
// O argumento item será atribuído dinamicamente


// forEach pode receber 3 argumentos, o item, o index e a array completa
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

videoGames.forEach(function (item, index, array) { // O forEach recebe uma função como argumento e executa essa função para cada item da array
    console.log(item);
    // retorna switch o index 0 e o array completa...
});
// O argumento item será atribuído dinamicamente

//NÃO FAZER DESSA FORMA, É APENAS PARA EXEMPLO

var numero = 0;
var maximo = 50;
for (; numero < maximo;) {
    console.log(numero);
    numero++;
}

// Exercício

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anosConquistaCopaBrasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < anosConquistaCopaBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa de ${anosConquistaCopaBrasil[i]}`);
}

// O Brasil ganhou a copa de 1959
// O Brasil ganhou a copa de 1962 ...


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i <= frutas.length; i++) {
    console.log(frutas[i]);

    if (frutas[i] === "Pera") {
        break;
    }


}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = fruta[frutas.length - 1]; // Melância forma correta
// ou
var ultimaFruta = frutas[4]// Melância forma errada, pois se a array mudar de tamanho, o código não irá funcionar corretamente



