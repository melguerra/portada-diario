// 5. For

// a. Recorrer array con alertas
var amigos = ["Ana", "Bruno", "Carlos", "Daniela", "Elena"];
for (var i = 0; i < amigos.length; i++) {
  alert("Amigo: " + amigos[i]);
}

// b. Primera letra en mayúscula
for (var i = 0; i < amigos.length; i++) {
  var p = amigos[i];
  alert(p.substring(0,1).toUpperCase() + p.substring(1));
}

// c. Unir todas en una frase
var fraseAmigos = "";
for (var i = 0; i < amigos.length; i++) {
  fraseAmigos += amigos[i] + " ";
}
alert("Amigos: " + fraseAmigos);

// d. Llenar array de 0 a 9
var numeros = [];
for (var i = 0; i < 10; i++) {
  numeros.push(i);
}
alert("Números del 0 al 9: " + numeros.join(", "));
