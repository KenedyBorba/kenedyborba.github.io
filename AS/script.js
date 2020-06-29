function Verificar() {
    var nota1 = parseFloat(document.getElementById("nota1").value.replace(/\D/g, ""));
    var nota2 = parseFloat(document.getElementById("nota2").value.replace(/\D/g, ""));
    var nota3 = parseFloat(document.getElementById("nota3").value.replace(/\D/g, ""));
    var nota4 = parseFloat(document.getElementById("nota4").value.replace(/\D/g, ""));
    var nota5 = parseFloat(document.getElementById("nota5").value.replace(/\D/g, ""));
    var nota6 = parseFloat(document.getElementById("nota6").value.replace(/\D/g, ""));

    var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
    var media = media.toFixed(2);
    if (media >= 0 && media <= 10) {
        resultado = "De acordo com as notas que você deu para cada cena a média é " + media;
    }
    else {
        resultado = "Ocorreu algum erro."
    }

    document.getElementById("result").innerHTML = resultado;
    return false
}