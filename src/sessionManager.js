// sessionManager.js

// Función para actualizar el valor de isLoggedIn a false
function cerrarSesion() {
  localStorage.setItem('isLoggedIn', 'false');
}

// Escuchar el evento beforeunload para capturar el cierre de la pestaña
window.addEventListener('beforeunload', cerrarSesion);

// Agregar una función para actualizar isLoggedIn después de un período de tiempo determinado (30 minutos en este caso)
function actualizarEstadoSesion() {
  localStorage.setItem('isLoggedIn', 'false');
}

// Escuchar el evento visibilitychange para detectar cambios de pestaña
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // La pestaña se ha vuelto visible, por lo que se debe actualizar el estado de la sesión a "true"
    localStorage.setItem('isLoggedIn', 'true');
  } else {
    // La pestaña se ha vuelto invisible, por lo que se debe actualizar el estado de la sesión a "false"
    actualizarEstadoSesion();
  }
});

export default {
  cerrarSesion,
  actualizarEstadoSesion
};
