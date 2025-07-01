// 6. Funciones

// a. Función suma
function sumar(a, b) {
  return a + b;
}
var resultado = sumar(7, 8);
alert("Resultado de la suma: " + resultado);

// b. Validar si es número
function sumarValidando(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Error: uno de los parámetros no es número");
    return NaN;
  }
  return a + b;
}
alert("Suma validada: " + sumarValidando(10, "hola"));

// c. Validar entero
function esEntero(n) {
  return n % 1 === 0;
}
alert("¿Es entero? " + esEntero(5.6));

// d. Validar enteros dentro de suma
function sumaDeEnteros(a, b) {
  if (!esEntero(a)) {
    alert("El primer número no es entero, se redondeará");
    a = Math.round(a);
  }
  if (!esEntero(b)) {
    alert("El segundo número no es entero, se redondeará");
    b = Math.round(b);
  }
  return a + b;
}
alert("Suma con enteros: " + sumaDeEnteros(4.3, 7.7));