function verificarMaior() {
  var num1 = parseInt(document.getElementById('numero1').value);
  var num2 = parseInt(document.getElementById('numero2').value);
  var num3 = parseInt(document.getElementById('numero3').value);

  var maior = Math.max(num1, num2, num3);

  var paragrafo = document.getElementById('resultado');
  paragrafo.innerHTML = "O maior número é: " + maior;
}