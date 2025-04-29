// verdadeiro e falso 
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else

var possuiGraduacao = true;


if (possuiGraduacao) { // O valor dentro dos parênteses sempre será avaliado em false ou true.
    console.log("Possui graduação");
} else {
    console.log("Não possui graduação");
}

// retorno: Possui graduação

// Condicional If e Else If
// Pode ter mais de um else if, mas só pode ter um else no final.

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
    console.log("Possui graduação");
}
else if (possuiDoutorado) {
    console.log("Possui doutorado");
}
else {
    console.log("Não possui graduação");
}

// retorno: Possui graduação


// TRUTHY E FALSE

// Falsy
if (false);
if (0) // ou -0
    if (NaN)
        if (null)
            if (undefined)
                if ('') // ou "" ou ``

                    // RESTo dos valores são truthy


                    var nome = '' // FALSE  se tiver espaço é TRUE
var nome = " " // TRUE
var nome = 5 // TRUE
var nome = 0 // FALSE
var nome = -5 // TRUE
var nome = "Lucas" / 10  // NaN - FALSE


// Truthy
if (true)
    if (1)
        if (' ')
            if ('andre')
                if (-5)
                    if ({})
                        if ([])


                            // Logica de NEGAÇÃO
                            // ! - nega o valor, se for true vira false e vice versa
                            // !! - transforma o valor em booleano, se for true vira true e vice versa 
                            // !true = false   
                            // !!true = true
                            // !false = true

                            // Truthy
                            if (!true) // false
                                if (!1) // false
                                    if (!'') // true
                                        if (!undefined) // true
                                            if (!!' ') // true
                                                if (!!'') // false

                                                    //!!Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

                                                    // OPERADORES DE COMPARAÇÃO -  Vão sempre retornar um valor booleano
                                                    // == - igual
                                                    // === - idêntico (mesmo tipo e mesmo valor)
                                                    // != - diferente
                                                    // !== - não idêntico (mesmo tipo e mesmo valor)
                                                    // > - maior que
                                                    // < - menor que
                                                    // >= - maior ou igual
                                                    // <= - menor ou igual
                                                    // ? - operador ternário (condição ? valor se true : valor se false)

                                                    10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

X = 10 // Diz que X é igual a 10
X == 10 // true - comparando o valor
X === 10 // true - comparando o valor e o tipo RECOMENDADO
X == '10' // true - comparando o valor, mas não o tipo
X === '10' // false - comparando o valor e o tipo

// se comparar uma String ela e ela for igual porem começar com maiusculo ou minusculo, o resultado será false
// Exemplo: 'andre' === 'Andre' // false - comparando o valor e o tipo
// Exemplo: 'andre' == 'Andre' // true - comparando o valor, mas não o tipo 
// Exemplo: 'andre' === 'andre' // true - comparando o valor e o tipo

//diferente
X != 10 // false - comparando o valor
X !== 10 // false - comparando o valor e o tipo
X != '10' // false - comparando o valor, mas não o tipo
X !== '10' // true - comparando o valor e o tipo
X != 5 // true - comparando o valor 


// OPERADORES LÓGICOS && - Retorna o ultimo valor verdadeiro ou o primeiro valor falso que ele encontrar
// && Compara se uma expressão e a outra é verdadeira
// O resultado só será true se ambas as expressões forem verdadeiras, caso contrário será false
// O Primeiro valor falso que ele encontra ele retorna e não continua avaliando o restante

true && true; // true - 
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão' - Gato é verdadeiro e cão também, então ele retorna o último valor
(5 - 5) && (5 + 5); // 0 - O primeiro valor falso que ele encontra é 0, então ele retorna 0 
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true - comparando valores por isso retorna boleano


// OPERADORES LÓGICOS (ou) || - Retorna o primeiro valor verdadeiro ou o último valor falso que ele encontrar
// || Compara se uma expressão ou a outra é verdadeira
// O resultado só será false se ambas as expressões forem falsas, caso contrário será true
// O Primeiro valor verdadeiro que ele encontra ele retorna e não continua avaliando o restante

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);// Ele retorna 8, pois o && retorna o ultimo valor verdadeiro 

// SWITCH - Caso seja... pode se verificar ou fazer acontecer uma ação conforme uma condição
// break - Para parar a execução do código, caso não tenha o break ele continua executando o código mesmo que não seja a condição verdadeira

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}

// EXERCICIOS

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 32;
var idadeParente = 50;

if (minhaIdade > idadeParente) {
    console.log("É maior");
} else if (minhaIdade === idadeParente) {
    console.log("É igual");
} else {
    console.log("É menor");
}

// É menor


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 
//                  3         5            3 


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); // true true false false false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log("Brasil tem mais habitantes que a China");
} else {
    console.log("Brasil tem menos habitantes que a China");
}

// Brasil tem menos habitantes que a China



// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
} // falso

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) { // falso || true
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}

// Cão
