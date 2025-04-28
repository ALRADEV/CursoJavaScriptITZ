//Comentários
//Servem para explicar o código 

// ou /* */ para comentar várias linhas de código

// Operadores de Atribuição
// Podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

numero = 20;
numero2 = 10;

numero += 10; // numero = numero + 10; imprime 30
numero += numero2; // numero = numero + numero2; imprime 40

// Operador Ternário
// Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false
// (idade >= 18) ? 'Pode beber' : 'Não pode beber'
// Se a condição for verdadeira, retorna 'Pode beber', se não, retorna 'Não pode beber'

var idade = 19;
var naoPossuiDiabetes = false; // Se a pessoa tem diabetes ou não

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';// não precisa ser um booleano, pode ser uma string ou número

// Operador  && procura o valor flasse, então para ser verdadeiro nao pode ter um false
console.log(podeBeber) // Pode beber


// IF Abreviado

//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if (possuiFaculdade)
    console.log('Possui faculdade');
else
    console.log('Não possui faculdade');

// se tivesse mais de uma linha de código, precisaria abrir e fechar as chaves {} para o if e o else
//exemplo:
if (possuiFaculdade) {
    console.log('Possui faculdade');
    console.log('Parabéns!');
}

//  Exercício

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500; // 1500


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCerto = (possuiCarro && possuiCasa) ? true : false; // true
console.log(darCerto) // true   
