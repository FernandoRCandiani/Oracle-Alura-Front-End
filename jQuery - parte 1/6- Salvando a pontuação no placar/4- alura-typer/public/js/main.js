var tempoInicial = $("#tempoDigitacao").text();
var campo = $(".campoDigitacao");

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botaoReiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
    var frase = jQuery(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numPalavras);
}

// CONTANDO PALAVRAS NO TEXTAREA

function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = (campo.val());
    
        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contadorPalavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contadorCaracteres").text(qtdCaracteres);
    });
}

// GameOver com eventos

function inicializaCronometro(){
    var tempoRestante = $("#tempoDigitacao").text();

    campo.one("focus", function(){

        $("#botaoReiniciar").attr("disabled", true);
        var cronometroID = setInterval(function(){
    
            tempoRestante--;
            $("#tempoDigitacao").text(tempoRestante);
    
            if (tempoRestante < 1){
                clearInterval(cronometroID);
                finalizarJogo();
            }
        },1000);
    });
}

function finalizarJogo(){
    campo.attr("disabled", true);
    $("#botaoReiniciar").attr("disabled", false);
    campo.toggleClass("campoBackground");
    inserePlacar();
}

// Reiniciando o jogo

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    $("#tempoDigitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campoBackground");

    campo.removeClass("bordaVermalha");
    campo.removeClass("bordaVerde");
}

// Marcação da borda

function inicializaMarcadores(){

    var frase = $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        var ehCorreto = (digitado == comparavel); // Modo mais enxuto

        campo.toggleClass("bordaVerde", ehCorreto);
        campo.toggleClass("bordaVermelha", !ehCorreto);

        /* OU
            if(digitado == comparavel){
                campo.addClass("bordaVerde");
                campo.removeClass("bordaVermelha");
            } else {
                campo.addClass("bordaVermelha");
                campo.removeClass("bordaVerde");
            }
        */
    });
}

