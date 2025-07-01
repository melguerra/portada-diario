// 2. Strings

// a. Convertir string a mayúsculas
var saludo = "bienvenida a la UAI";
alert(saludo.toUpperCase());

// b. Primeros 5 caracteres
var codigoAlumno = "UAI2025INF";
var primerosCinco = codigoAlumno.substring(0, 5);
alert("Primeros 5 caracteres del código: " + primerosCinco);

// c. Últimos 3 caracteres
var ultimosTres = codigoAlumno.substring(codigoAlumno.length - 3);
alert("Últimos 3 caracteres del código: " + ultimosTres);

// d. Primera en mayúscula, resto en minúscula
var nombreAlumno = "mELANI";
var nombreCorregido = nombreAlumno.substring(0,1).toUpperCase() + nombreAlumno.substring(1).toLowerCase();
alert("Nombre corregido: " + nombreCorregido);

// e. Posición del primer espacio
var frase = "Hola Facultad";
var posicionEspacio = frase.indexOf(" ");
alert("Posición del primer espacio: " + posicionEspacio);

// f. Capitalizar dos palabras largas
var textoDoble = "ingenieria informatica";
var espacio = textoDoble.indexOf(" ");
var palabra1 = textoDoble.substring(0,1).toUpperCase() + textoDoble.substring(1,espacio).toLowerCase();
var palabra2 = textoDoble.substring(espacio+1,espacio+2).toUpperCase() + textoDoble.substring(espacio+2).toLowerCase();
alert("Texto capitalizado: " + palabra1 + " " + palabra2);
