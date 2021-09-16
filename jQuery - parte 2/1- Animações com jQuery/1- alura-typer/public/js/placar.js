// Função de evento click botaoPlacar
$("#botaoPlacar").click(mostarPlacar);

// função de escutar o placar

function mostarPlacar(){
    $(".placar").slideToggle(600);
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