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

// Salvando a pontuação na placar

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Fernando";
    var numPalavras = $("#contadorPalavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botaoRemover").click(removeLinha);

    corpoTabela.prepend(linha);
}

// Criando um <tr> dentro do Javascript
function novaLinha(usuario, palavras){
    var linha =$("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botaoRemover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Icone dentro dp <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

// Adicionando uma função de remoção

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}