function VerificarImc() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura * altura);
    if (imc < 18.5) {
        resultado = "Abaixo do peso ideal";
    }
    if (imc >= 18.5 && imc < 25) {
        resultado = "No peso ideal";
    }
    if (imc >= 25 && imc <= 30) {
        resultado = "Acima do peso ideal";
    }
    if (imc > 30) {
        resultado = "Obeso";
    }

    document.getElementById("result").innerHTML = resultado;
}