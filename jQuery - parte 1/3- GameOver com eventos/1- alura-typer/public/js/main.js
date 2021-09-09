// Pegando o texto dentro da class frase
var frase = jQuery(".frase").text();

// Fazendo com que split quebra a frase no " " e assim pegando o valor de array coincide com tamanho da frase
var numPalavras = frase.split(" ").length;

// Recebendo o tamanho da frase
var tamanhoFrase = $("#tamanhoFrase");

// Reiniando a pagina trocarar o valor das palavra da frase
tamanhoFrase.text(numPalavras);

// CONTANDO PALAVRAS NO TEXTAREA

var campo = $(".campoDigitacao");
campo.on("input", function(){
    var conteudo = (campo.val());

    var qtdPalavras = conteudo.split(/\S+/).length -1; // (/\S+/).length -1 Melhorar a contagem de palavras com uma expressão regular
    $("#contadorPalavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contadorCaracteres").text(qtdCaracteres);

});

// GameOver com eventos

var tempoRestante = $("#tempoDigitacao").text();

campo.one("focus", function(){

    var cronometroID = setInterval(function(){

        tempoRestante--;
        $("#tempoDigitacao").text(tempoRestante);

        if (tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    },1000);

});