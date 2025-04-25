// FUNÇOES:

//Bloco de código que pode ser executado e reutilizado. 
// Valores podem ser passados por uma função e a mesma retorna outro valor.

//Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

// qualquer nome com () é uma função

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total); // 15.7

// sempre () para executar a função
// se não colocar () a função não executa, apenas retorna o valor da função

function imc(peso, altura) { // no () são os parâmetros da função
    const imc = peso / (altura ** 2); // ** é o operador de potenciação, ou seja, ele eleva a altura ao quadrado
    return imc;
}

console.log(imc(83, 1.80)); // 25.69
//83 e 1.80 são os argumentos da função, ou seja, os valores que estão sendo passados para a função


// PARENTESES EXECUTA A FUNÇÃO
// SE TEM UM PARAMETRO NÃO É OBRIGATORIO PASSSAR UM PARÂMETRO

function corFavorita(cor) {
    if (cor === "azul") {
        return "Olhe para o céu";
    } else if (cor === "verde") {
        return "Olhe para as árvores";

    } else if (cor === "amarelo") {
        return "Olhe para o sol";
    } else {
        return " Você não gosta de nada";
    }

}

corFavorita() // você não gosta de nada
corFavorita("azul") // Olhe para o céu

//---------------------------------------------------------

// ARGUMENTOS - podem ser funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}


// FUNÇÃO CALLBACK: OCorre apos algo acontece, ex: apos o click a função excecuta
addEventListener('click', function () { // função anônima não tem nome
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
// Ou pode ser feita dessa forma:

function mostraMensagem() {
    console.log('Clicou');
}
addEventListener('click', mostraMensagem); // aqui a função é chamada pelo nome, sem os parênteses