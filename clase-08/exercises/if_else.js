// 4. If Else

// a. Número aleatorio y alerta
var aleatorio = Math.random();
if (aleatorio >= 0.5) {
  alert("Mayor o igual a 0.5");
} else {
  alert("Menor a 0.5");
}

// b. Edad y categoría
var edad = 22;
if (edad < 2) {
  alert("Bebé");
} else if (edad < 13) {
  alert("Niña");
} else if (edad < 20) {
  alert("Adolescente");
} else if (edad < 31) {
  alert("Joven adulta");
} else if (edad < 61) {
  alert("Adulta");
} else if (edad < 76) {
  alert("Adulta mayor");
} else {
  alert("Anciana");
}