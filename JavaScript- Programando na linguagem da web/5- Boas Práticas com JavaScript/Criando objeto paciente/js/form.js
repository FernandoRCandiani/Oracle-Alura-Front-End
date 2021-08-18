
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    // Capturarndo o valores dos campos do form

    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);

    // Criando elemento HTML com JavaScript
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculoImc(peso, altura);

    // Utilizando o JavaScript para adicionar um elemento dentro de outro
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // O tbody do HTML através do seu id, e utilizar a função appendChild para adicionar a tr como sua filha:

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    function obtemPacienteDoFormulario(form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculoImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

});