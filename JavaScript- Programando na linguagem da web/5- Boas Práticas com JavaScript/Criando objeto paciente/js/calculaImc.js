console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = "peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        tdImc.textContent = "Altura inválido";
        alturaEhValida = false
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){

            var imc = calculoImc(peso, altura);
            tdImc.textContent = imc;
        
    }else{
        tdImc.querySelector = "Altura e / ou peso inválido";
    }
}

function calculoImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
