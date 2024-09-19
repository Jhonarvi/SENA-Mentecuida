// Capturar elementos de los formularios
const formLoginContainer = document.getElementById('formLoginContainer');
const formRegistroContainer = document.getElementById('formRegistroContainer');
const btnRegistro = document.getElementById('btnRegistro');

// Al hacer clic en el botón "Crear cuenta nueva"
btnRegistro.addEventListener('click', function() {
    // Ocultar el formulario de login y mostrar el de registro
    formLoginContainer.style.display = 'none';
    formRegistroContainer.style.display = 'block';
});
