/*function soma(n1, n2) {
    return n1 + n2;
}
 alert(soma(5, 10));

var validar = 0;
function validaIdade(idade) {
    var validar;
    if (idade <= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Wual sua idade");
validaIdade(idade);
console.log(validar); */

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    /* alert("Obrigado por clicar"); */
    /*     console.log(document.getElementById("agradecimento")); */
}

function redirecionamento() {
    window.open("https://linktr.ee/iareis"); /* abre em uma nova janela */
    //window.Location.href =
    ("https://linktr.ee/iareis"); /* sobrepõem a janela vigente */
}

function trocar() {
    document.getElementById("mousemove").innerHTML =
        "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregada");
}
