// Pegando o texto dentro da class frase
var frase = jQuery(".frase").text();

// Fazendo com que split quebra a frase no " " e assim pegando o valor de array coincide com tamanho da frase
var numPalavras = frase.split(" ").length;

// Recebendo o tamanho da frase
var tamanhoFrase = $("#tamanhoFrase");

// Reiniando a pagina trocarar o valor das palavra da frase
tamanhoFrase.text(numPalavras);