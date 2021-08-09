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

var imc = (peso / (altura * altura));

tdImc.textContent = imc;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(imc);