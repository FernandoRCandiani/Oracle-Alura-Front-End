$("#botaoFrase").click(fraseAleatoria);
$("#botaoFraseId").click(buscaFrase);

// Fazendo uma requisição AJAX com jQuery
function fraseAleatoria (){

    $("#spinner").toggle(); // Mostrando o spinner

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle(); // Ao falhar mostra a mensagem de erro
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){ // Sempre escondendo o spinner
        $("#spinner").toggle();
    })
}

// Fazendo a logica do numeroAleatorio para escoler qual possisão sera pega na array 
function trocaFraseAleatoria (data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

// Buscando frase com id
function buscaFrase(){

    $("#spinner").toggle();

    var fraseId = $("#fraseId").val();
    var dados = {id : fraseId}; // Criação do objeto JS que guarda a id

    // Passando objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);  
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){

    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}