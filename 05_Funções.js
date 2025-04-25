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

//---------------------------------------------------------

// RETURN 
//Quando não definimos o return, ela irá retornar undefined. 
// O código interno da função é executado normalmente, 
// independente de existir valor de return ou não.

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

//---------------------------------------------------------

//Valores retornados

//Uma função pode retornar qualquer tipo de dado e até outras funções.
// Porem retornar diferentes tipos de dados na mesma função não é uma boa ideia. EX:

// jeito errado: retorna string e um bolean ou um número

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}


// jeito certo: retorna apenas booleano  ou string
// ou número

function terceiraIdade(idade) {
    if (typeof idade !== 'number') { // typeof verifica o tipo de dado.
        return 'Informe a sua idade!'; // RETURN serve para encerrar a função nao dando continuidade
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60)); // true
console.log(terceiraIdade(50)); // false  
console.log(terceiraIdade('60')); // Informe a sua idade!

//---------------------------------------------------------

//ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
// O mesmo vale para funções, se uma função estiver dentro de outra, ela só será visível dentro da função pai.

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(totalPaises); // erro, totalPaises não definido
console.log(precisoVisitar(20)); // ainda faltam 173 paises para visitar  

//Escopo Léxico
//Funções conseguem acessar variáveis que foram criadas no contexto pai
// ou seja, uma função consegue acessar variáveis que foram criadas fora dela.

var profissao = 'Designer';

function dados() {
    var nome = "Alisson";
    var idade = 32; // quando a varivavel nao está sendo chamada ela fica cinza/ apagada
    function outrosDados() {
        var endereco = "Rua 1";
        var idade = 32; // variavel repetida dentro da funçao passa a ser a variavel ativa
        return `${nome}, ${idade}, ${endereco}, ${profissao}`; // nome e profissao são variaveis que estão fora da função, mas podem ser acessadas dentro dela
    }

    return outrosDados(); // aqui a função é ativada/chamada e o valor dela é retornado
}

console.log(dados()); // Alisson, 32, Rua 1, Designer   
console.log(outrosDados()); // erro, outrosDados não definido
// console.log(nome); // erro, nome não definido    

//Hoisting - Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória3

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

// o JS move a função para o topo do código, mas não move as variáveis
// o JS move todas as variáveis para o topo do código, e as funções e depois executa o código   

// EXERCICIO

// Crie uma função para verificar se um valor é Truthy

function verificarValor(valor) {
    return !!valor; // !! transforma o valor em booleano

}

console.log(verificarValor(0)); // false
console.log(verificarValor(1)); // true
console.log(verificarValor("")); // false
console.log(verificarValor("Alisson")); // true
console.log(verificarValor(null)); // false

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4; // ou lado + lado + lado + lado
}

console.log(perimetroQuadrado(3)); // 12    


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`; // template string, o mesmo que nome + " " + sobrenome
}

console.log(nomeCompleto("Alisson", "Lincoln")); // Alisson Lincoln

//!! jeito errado:

function nomeCompleto(nome, sobrenome) {
    nome = "Alisson";
    sobrenome = "Lincoln";
    return `${nome} ${sobrenome}`;
} //A função tem parâmetros, mas você está sobrescrevendo eles com valores fixos dentro da função. Isso torna os parâmetros inúteis.


// Crie uma função que verifica se um número é par

function verificarNumeroPar(numero) {
    if (numero % 2 !== 0) {
        return "o número é impar";
    } else {
        return "o número é par";
    }
}

console.log(verificarNumeroPar(10)); // o número é par
console.log(verificarNumeroPar(11)); // o número é impar


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
    return typeof dado; // typeof retorna o tipo de dado
}

console.log(tipoDeDado(10)); // number
console.log(tipoDeDado("10")); // string
console.log(tipoDeDado(true)); // boolean
console.log(tipoDeDado([1, 2, 3])); // object

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
    var nomeCompleto = "Alisson Lincoln";
    return nomeCompleto; // ou console.log(nomeCompleto);
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

// corrigido 

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

// São duas funções separadas onde nao consegue usar a variavel da outra função
// a variavel totalPaises foi criada fora das funções, assim ela pode ser acessada por ambas as funções
// e o valor dela pode ser alterado dentro de cada função, se necessário