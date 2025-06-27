const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const edad = document.getElementById('edad');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const ciudad = document.getElementById('ciudad');
const codigoPostal = document.getElementById('codigo-postal');
const dni = document.getElementById('dni');
const saludo = document.getElementById('saludo');
const formulario = document.getElementById('formulario');



function mostrarError(input, mensaje) {
  document.getElementById('error-' + input.id).textContent = mensaje;
}

function limpiarError(input) {
  document.getElementById('error-' + input.id).textContent = '';
}

function validarCampo(input, regex, mensaje) {
  if (!regex.test(input.value)) {
    mostrarError(input, mensaje);
    return false;
  }
  return true;
}
nombre.addEventListener('keydown', () => {
  saludo.textContent = 'HOLA ' + nombre.value.toUpperCase();
});

nombre.addEventListener('focus', () => limpiarError(nombre));
nombre.addEventListener('blur', () => {
  validarCampo(nombre, /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s+[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/, 'Debe tener más de 6 letras y un espacio.');
});

email.addEventListener('focus', () => limpiarError(email));
email.addEventListener('blur', () => {
  validarCampo(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido');
});

password.addEventListener('focus', () => limpiarError(password));
password.addEventListener('blur', () => {
  validarCampo(password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mínimo 8 caracteres, letras y números');
});

repeatPassword.addEventListener('focus', () => limpiarError(repeatPassword));
repeatPassword.addEventListener('blur', () => {
  if (repeatPassword.value !== password.value) {
    mostrarError(repeatPassword, 'Las contraseñas no coinciden');
  }
});

edad.addEventListener('focus', () => limpiarError(edad));
edad.addEventListener('blur', () => {
  validarCampo(edad, /^(1[89]|[2-9][0-9])$/, 'Debe ser 18 o más');
});

telefono.addEventListener('focus', () => limpiarError(telefono));
telefono.addEventListener('blur', () => {
  validarCampo(telefono, /^\d{7,}$/, 'Debe tener al menos 7 dígitos sin espacios');
});

direccion.addEventListener('focus', () => limpiarError(direccion));
direccion.addEventListener('blur', () => {
  validarCampo(direccion, /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z\d\s]{5,}$/, 'Debe tener letras, números y un espacio');
});

ciudad.addEventListener('focus', () => limpiarError(ciudad));
ciudad.addEventListener('blur', () => {
  validarCampo(ciudad, /^.{3,}$/, 'Al menos 3 caracteres');
});

codigoPostal.addEventListener('focus', () => limpiarError(codigoPostal));
codigoPostal.addEventListener('blur', () => {
  validarCampo(codigoPostal, /^.{3,}$/, 'Al menos 3 caracteres');
});

dni.addEventListener('focus', () => limpiarError(dni));
dni.addEventListener('blur', () => {
  validarCampo(dni, /^\d{7,8}$/, 'Debe tener 7 u 8 dígitos');
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const errores = document.querySelectorAll('.error');
  const tieneErrores = Array.from(errores).some(e => e.textContent !== '');

  if (tieneErrores) {
    alert('Hay errores en el formulario. Por favor, corregí los campos marcados.');
  } else {
    const datos = `Formulario enviado correctamente:\n
    Nombre: ${nombre.value}
    Email: ${email.value}
    Edad: ${edad.value}
    Teléfono: ${telefono.value}
    Dirección: ${direccion.value}
    Ciudad: ${ciudad.value}
    Código Postal: ${codigoPostal.value}
    DNI: ${dni.value}`;
    alert(datos);
  }
});
