// classList
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.


const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
console.log(menu.classList[0])
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

menu.classList.add('ativo', 'teste'); // duas classes
menu.classList.remove('ativo');

if(menu.classList.contains("azul")) { // verifica se contem a classe
    menu.classList.add("possui-azul");
} else {
    menu.classList.add("nao-possui-azul");

}

menu.className =+ " vermelho" // adciona a classe vermelho junto


// attributes
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
console.log(animais.attributes["data-texto"]) // seleciona diretamento o que eu quero, porem o nome tem que ser passado como string pois nao é reconhecido como variavel


//getAttribute e setAttribute
//Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src caminho da imagem
img.setAttribute('alt', 'Texto Alternativo'); // 1º cria o atributo alt e nomeia, ou altera ambos 
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo - verifica se tem atributo alt ou title etc..


//
//Read Only vs Writable - SO leitura
//Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only pois não altera nada so le o valor


// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// EXERCICIOS

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a")// pega todos os itens que começa com a

itensMenu.forEach((item) => { // tem que fazer o loop para acessar cada classe 
    item.classList.add("ativo")
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => { // tem que fazer o loop para acessar cada classe 
    item.classList.add("ativo")
});

itensMenu[0].classList.add("Ativo");

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");

img.forEach((img) => {
    const possuiAtributo = img.hasAttribute("alt");
    console.log(imgs, possuiAtributo)
})


// Modifique o href do link externo no menu

const link = document.querySelector(a[href^="http"]); // começa com http é link externo, a = link 

link.setAttribute("href", "https://www.google.com") // href é o atributo que quero moficar, e depois passo como quero

