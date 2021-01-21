function consultaCep() {
    var cep = document.getElementById("cep").value;
    console.log(cep);
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            /*Na impressão via console.LOG pode utilizar no Response
            o nome do indice, por exemplo localidade
            console.log(response.localidade); */
            console.log(response);
            /* alert(response.logradouro); */
            document.getElementById("logradouro").innerHTML =
                response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML =
                response.localidade;
            /* Existe uma outra maneira de utilizar o código 
            através do CIFRÃO vc chama o jQuery e o HASHTAG localiza o ID
            e joga para o HTML   
            document.getElementById("uf").innerHTML = response.uf; */
            $("#uf").html(response.uf);
        },
    });
}
