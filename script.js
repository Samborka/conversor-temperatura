function Converter() {
  var elementoTemperaturaCelcius = document.getElementById("temperatura"); //Pega o elemento temperatura
  var temperaturaCelcius = elementoTemperaturaCelcius.value; //Pega apenas o valor do elemento temperatura (String)
  var temperaturaCelciusNumero = parseFloat(temperaturaCelcius); //Transforma a temperatura em numero ao inves de manter string

  var temperaturaFarenheit = temperaturaCelciusNumero * 1.8 + 32; //Converte de Celcius para Farenheit
  var temperaturaFarenheitArredondado = temperaturaFarenheit.toFixed(2); //Fixa em duas casas decimais

  var temperaturaKelvin = parseFloat(temperaturaCelcius) + 273; //Converte de Celcius para Kelvin
  var temperaturaKelvinArredondado = temperaturaKelvin.toFixed(2); //Fixa em 2 casas decimais

  //Fazer aparecer na tela
  var elementoValorConvertidoFarenheit = document.getElementById(
    "valorConvertidoFarenheit"
  ); //Seleciona o elemento Farenheit
  var elementoValorConvertidoKelvin = document.getElementById(
    "valorConvertidoKelvin"
  ); //Seleciona o elemento Kelvin
  var valorConvertidoFarenheit =
    "O valor em Farenheit é: " + temperaturaFarenheitArredondado + "°F";
  elementoValorConvertidoFarenheit.innerHTML = valorConvertidoFarenheit;
  var valorConvertidoKelvin =
    "O valor em Kelvin é: " + temperaturaKelvinArredondado + "K";
  elementoValorConvertidoKelvin.innerHTML = valorConvertidoKelvin;
}