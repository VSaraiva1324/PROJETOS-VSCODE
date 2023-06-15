function converterTexto() {
    var input = document.getElementById('texto');
    var span = document.getElementById('resultado');

    var texto = input.value.toUpperCase();
    var numCaracteres = texto.length;

    input.value = texto;
    span.innerHTML = "Número de caracteres digitados: " + numCaracteres;
}