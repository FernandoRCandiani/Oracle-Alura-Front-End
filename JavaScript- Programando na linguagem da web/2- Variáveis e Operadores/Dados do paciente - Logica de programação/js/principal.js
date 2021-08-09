// Mexendo no titulo da pagina 
console.log("Este arquivo foi carregado externo");

var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

// Fazendo o calculo do IMC do paciente

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValido = true;

if(peso <= 0 || peso >= 1000){

    tdImc.textContent = "Peso invalido!";
    pesoValido = false;
}

if(altura <= 0 || altura >= 3.00){

    tdImc.textContent = "Altura invalida!";
    alturaValido = false;
}

if(pesoValido && alturaValido){

    var imc = (peso / (altura * altura));
    tdImc.textContent = imc;
}



