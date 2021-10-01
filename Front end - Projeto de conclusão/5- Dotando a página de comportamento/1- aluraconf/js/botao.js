// Funções de evento click com botao
// Sobre
$("#botao_sobre").click(scrollSobre);

// Palestrantes
$("#botao_palestrantes").click(scrollPalestrantes);

// Inscreva-se
$("#botao_inscreva").click(scrollInscreva);

// Funções para chamar animação
// Sobre
function scrollSobre () {
    var posicaoSobre = $(".painel").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoSobre + "px"
        },1000);
}
// Palestrantes
function scrollPalestrantes () {
    var posicaoPalestrantes = $(".palestrantes").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoPalestrantes + "px"
        },1000);
}
// Inscreva
function scrollInscreva () {
    var posicaoInscreva = $(".formulario").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoInscreva + "px"
        },1000);
}