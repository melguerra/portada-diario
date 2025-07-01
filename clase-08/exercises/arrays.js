// 3. Arrays

var materias = ["Base de Datos", "POO", "Redes", "Minería de Datos", "Seguridad", "Calidad"];

// a. Mostrar las materias 2 y 5
alert("Materia 2: " + materias[1]);
alert("Materia 5: " + materias[4]);

// b. Ordenar alfabéticamente
var ordenadas = materias.slice().sort();
alert("Materias ordenadas: " + ordenadas.join(", "));

// c. Agregar al principio y final
materias.unshift("Inglés Técnico");
materias.push("Inteligencia Artificial");
alert("Materias modificadas: " + materias.join(", "));

// d. Quitar del principio y final
materias.shift();
materias.pop();
alert("Materias acortadas: " + materias.join(", "));

// e. Invertir orden
var invertidas = materias.slice().reverse();
alert("Materias invertidas: " + invertidas.join(", "));

// f. Unir con guiones
alert("Materias unidas: " + materias.join(" - "));

// g. Copiar desde POO hasta Seguridad
var seleccionadas = materias.slice(1,5);
alert("Materias seleccionadas: " + seleccionadas.join(", "));
