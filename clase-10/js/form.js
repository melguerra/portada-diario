// Elementos
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

// Modal
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar-modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensaje = document.getElementById('modal-mensaje');
const modalRespuesta = document.getElementById('modal-respuesta');

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

// Mostrar saludo en tiempo real
nombre.addEventListener('keydown', () => {
  saludo.textContent = 'HOLA ' + nombre.value.toUpperCase();
});

// Validaciones por campo
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

// Mostrar modal
function mostrarModal(titulo, mensaje, respuesta = {}) {
  modalTitulo.textContent = titulo;
  modalMensaje.textContent = mensaje;

  if (respuesta && Object.keys(respuesta).length > 0) {
    let lista = '<ul>';
    for (const clave in respuesta) {
      lista += `<li><strong>${clave}:</strong> ${respuesta[clave]}</li>`;
    }
    lista += '</ul>';
    modalRespuesta.innerHTML = lista;
  } else {
    modalRespuesta.innerHTML = '';
  }

  modal.classList.remove('oculto');
}

// Cerrar modal
cerrarModal.addEventListener('click', () => {
  modal.classList.add('oculto');
});

// Validación y envío
formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  const errores = document.querySelectorAll('.error');
  const tieneErrores = Array.from(errores).some(e => e.textContent !== '');

  if (tieneErrores) {
    alert('Hay errores en el formulario. Por favor, corregí los campos marcados.');
    return;
  }

  const datos = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
    telefono: telefono.value,
    direccion: direccion.value,
    ciudad: ciudad.value,
    codigoPostal: codigoPostal.value,
    dni: dni.value,
  };

  const queryString = new URLSearchParams(datos).toString();

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryString}`, {
      method: 'GET'
    });

    if (!response.ok) throw new Error(`Código de error: ${response.status}`);

    const respuesta = await response.json();

    mostrarModal('Suscripción exitosa', 'Te has suscripto correctamente al newsletter.', datos);

    // Guardar en LocalStorage
    localStorage.setItem('datosFormulario', JSON.stringify(datos));

  } catch (error) {
    mostrarModal('Error en la suscripción', error.message);
  }
});

// Al cargar, rellenar si hay datos guardados
window.onload = () => {
  const datosGuardados = localStorage.getItem('datosFormulario');
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    nombre.value = datos.nombre;
    email.value = datos.email;
    edad.value = datos.edad;
    telefono.value = datos.telefono;
    direccion.value = datos.direccion;
    ciudad.value = datos.ciudad;
    codigoPostal.value = datos.codigoPostal;
    dni.value = datos.dni;
    saludo.textContent = 'HOLA ' + datos.nombre.toUpperCase();
  }
};
