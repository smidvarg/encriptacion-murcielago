//Crear un diccionario
var dict = {"M":"0", "U":"1", "R":"2", "C":"3", "I":"4", "E":"5", "L":"6", "A":"7", "G":"8", "O":"9"};

//Función de Codificación

function encoder(word){
  word = document.getElementById('ingresar').value;
  word = word.toUpperCase();
  var out = "";

  for (x = 0; x < word.length; x++){
    var letter = word.charAt(x);

    if (isIndict(letter)) {
      out += dict[letter];
    }else {
      out += letter;
    }
  }
  (" Texto codificado: " +out);
  return out;
}

//Es una letra del diccionario?

function isIndict(letter){
  for (a in dict){
    if(a == letter){
      console.log("match");
      return true;
    }
  }
  return false
}

function codificar() {
  if (document.getElementById('ingresar').value == "") {
    alert("No hay texto para codificar");
    document.getElementById('salida').value = "";
  }else {
    document.getElementById('salida').value = encoder("");
  }
}

//Decodificación

//Crear un diccionario
var dictx = {"0":"M", "1":"U", "2":"R", "3":"C", "4":"I", "5":"E", "6":"L", "7":"A", "8":"G", "9":"O"};

//Función de Codificación

function decoder(num){
  num = document.getElementById('ingresar-x').value;
  num = num.toUpperCase();
  var out = "";

  for (x = 0; x < num.length; x++){
    var numero = num.charAt(x);

    if (isIndictx(numero)) {
      out += dictx[numero];
    }else {
      out += numero;
    }
  }
  (" Texto decodificado: " +out);
  return out;
}

//Es una letra del diccionario?

function isIndictx(numero){
  for (a in dictx){
    if(a == numero){
      console.log("match");
      return true;
    }
  }
  return false
}

function decodificar() {
  if (document.getElementById('ingresar-x').value == "") {
    alert("No hay texto para decodificar");
    document.getElementById('salida-x').value = "";
  }else {
    document.getElementById('salida-x').value = decoder("");
  }
}
