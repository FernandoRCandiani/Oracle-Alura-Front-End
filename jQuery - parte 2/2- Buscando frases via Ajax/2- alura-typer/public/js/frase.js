$("#botaoFrase").click(fraseAleatoria);

// Fazendo uma requisição AJAX com jQuery
function fraseAleatoria (){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

// Fazendo a logica do numeroAleatorio para escoler qual possisão sera pega na array 
function trocaFraseAleatoria (data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
}