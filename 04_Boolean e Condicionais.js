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



