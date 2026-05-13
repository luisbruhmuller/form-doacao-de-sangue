var listaDoadores = [];

function salvarDoador(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    var tipoSanguineo = document.getElementById("tipo").value;
    var telefone = document.getElementById("telefone").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    if (nome == "" || email == "" || idade == "" || peso == "" || tipoSanguineo == "" || telefone == "" || cidade == "" || estado == "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (nome.indexOf(" ") == -1) {
        alert("Digite seu nome completo (nome e sobrenome)!");
        return;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Digite um email válido!");
        return;
    }

    if (idade < 16) {
        alert("A idade mínima é 16 anos!");
        return;
    }

    if (peso < 50) {
        alert("O peso mínimo é 50kg!");
        return;
    }

    if (isNaN(telefone)) {
        alert("O telefone deve conter apenas números!");
        return;
    }

    var doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    listaDoadores.push(doador);

    console.log("Novo cadastro:");
    console.log(doador);
    console.log("Lista completa:");
    console.log(listaDoadores);

    document.getElementById("lista-doadores").innerHTML = "Cadastro de " + doador.nome + " realizado!";

    document.getElementById("formsangue").reset();
}

document.getElementById("formsangue").onsubmit = salvarDoador;
