function Verificar() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);
    var nota5 = parseInt(document.getElementById("nota5").value);
    var nota6 = parseInt(document.getElementById("nota6").value);

    var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
    var media = media.toFixed(2);
    resultado = "De acordo com as notas que você deu para cada cena a média é " + media;


    document.getElementById("result").innerHTML = resultado;
}