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
