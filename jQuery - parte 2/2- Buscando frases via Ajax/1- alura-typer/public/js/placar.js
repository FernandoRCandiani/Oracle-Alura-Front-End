// Função de evento click botaoPlacar
$("#botaoPlacar").click(mostarPlacar);

// função de escutar o placar

function mostarPlacar(){
    $(".placar").stop().slideToggle(600);
}

// Salvando a pontuação na placar

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Fernando";
    var numPalavras = $("#contadorPalavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botaoRemover").click(removeLinha);

    corpoTabela.prepend(linha);

    // Animando o scroll
    $(".placar").slideDown(500);
    scrollPlacar();
}

// Função para animar o scroll
function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoPlacar + "px"
        }, 1000);
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

// Adicionando uma função de remoção com animação

function removeLinha(event){
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();
    }, 1000);
    
}