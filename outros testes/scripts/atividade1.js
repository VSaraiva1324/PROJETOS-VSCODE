function calcularCubo() {
    var input = document.getElementById ('numero');
    var span = document.getElementById('resultado');

    var numero = input.value;
    var cubo = Math.pow(numero, 3);

    span.innerHTML = "O cubo de " + numero + " é: " + cubo;
}