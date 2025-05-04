//addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function () { // ou arrow function :> img.addEventListener('click', () => {
})

//O terceiro parâmetro é opcional. 