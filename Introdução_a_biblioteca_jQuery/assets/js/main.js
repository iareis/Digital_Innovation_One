function consultaCep() {
    var cep = document.getElementById("cep").value;
    console.log(cep);
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#numberCEP").html(
                "O endereço para o CEP " + response.cep + " é:"
            );
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep-hide").show();
        },
    });
}

$(function () {
    $(".cep-hide").hide();
});
