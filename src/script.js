function Converter() {
  var valorElemento = document.getElementById("valor").value;
  var valorEmDolarNumerico = parseFloat(valorElemento);

  //Valor Real
  var valorEmReal = valorEmDolarNumerico * 5;

  //valor Euro
  var valorEmEuro = valorEmDolarNumerico * 0.85;

  //valor btc

  var valorEmbtc = valorEmDolarNumerico * 0.000021;
  var novoValorEmBtc = valorEmbtc.toFixed(4);

  //Mostrando no HTML
  var elementoValorConvertidoReal = document.getElementById("valorConvertido");
  var valorConvertidoReal = "o resultado em real é R$ " + valorEmReal;
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;

  //Valor Convertido Euro
  var elementoValorConvertidoEuro = document.getElementById("valorConvertido1");
  var valorConvertidoEuro = "o resultado em Euro é " + valorEmEuro + " Є ";
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;

  //Valor Convertido btc
  var elementoValorConvertidoBtc = document.getElementById("valorConvertido2");
  var valorConvertidoBtc =
    "o resultado em bitcoin é " + novoValorEmBtc + " btc";
  elementoValorConvertidoBtc.innerHTML = valorConvertidoBtc;
}
