//Height e Width
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//Mesma coisa para o Width, clientWidth

// offsetTop e offsetLeft

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


// getBoundingClientRect()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();

console.log(rect.)// para exibir os dados abaixo selecionando os metodos
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

//Window

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


//matchMedia();  
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)'); // só vai ser verdadeiro se o elemento tiver mais de 600px
// '(max-width: 600px)' - midia query 
if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}


/*Dica
Selecione o elemento no inspetor (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ... */

//Exercício

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img =  document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);


// Retorne a soma da largura de todas as imagens
funciona somaImagens() {
    const imgs =  document.querySelectorAll("img");
    let soma = 0;
    imgs.forEach((img) => {
        soma = soma + imgs.offsetWidth;
       
    });

    console.log(soma) // aparerce as soma de todos
},

window.onload =  function () {// propriedade que pode ser atribuidad a uma função que é ativada qunado uma função ocorre, no caso apos ser carregado
    somaImagens();    
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links =  document.querySelectorAll("a"); // seleciona todos os links

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeigth = link.offsetHeigth;

    if(linkWidth >= 48 && linkHeigth>= 48) {
        console.log(link, "Possui acessibilidade")
    }else {
        console.log(link, "Não possui acessibilidade")
    }
}) 

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall =  window.matchMedia("(max-width: 720px)"),matches;

if(browserSmall) {
    const menu =  document.querySelector(".menu");
    menu.classList.add("menu-mobile")
}
