document.addEventListener('DOMContentLoaded', function () {
    // Verifica si el modo oscuro está activo en localStorage
    var temaOscuroActivo = localStorage.getItem('temaOscuro') === 'true';

    // Aplica el modo oscuro si está activo
    if (temaOscuroActivo) {
        document.body.classList.add('tema-oscuro');
    }

    // Actualiza el texto del botón basado en el estado actual del tema
    actualizarTextoBoton();
});

// Función para cambiar el tema y actualizar el texto 
function cambiarTema() {
    
    document.body.classList.add('clic');

    
    var textContainer = document.querySelector('.text');
    textContainer.classList.add('clic');

    
    setTimeout(() => {
        document.body.classList.toggle('tema-oscuro');

        // Guarda el estado del modo oscuro en localStorage
        var temaOscuroActivo = document.body.classList.contains('tema-oscuro');
        localStorage.setItem('temaOscuro', temaOscuroActivo);

        // Elimina la clase 'clic' después de que termine la transición
        setTimeout(() => {
            document.body.classList.remove('clic');
            textContainer.classList.remove('clic');
        }, 300);

        // Actualiza el texto del botón
        actualizarTextoBoton();
    }, 100);
}

// Función para actualizar el texto del botón
function actualizarTextoBoton() {
    var botonCambioTema = document.querySelector('.cambiar-tema');
    botonCambioTema.textContent = document.body.classList.contains('tema-oscuro') ? 'Modo Claro' : 'Modo Oscuro';
}
function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // validación de campos
    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return;
    }
    
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Mensaje: " + mensaje);

    
    // mensaje de éxito
    alert("¡Formulario enviado con éxito!");

    // botón después de enviar el formulario
    actualizarTextoBoton();
}
/* Agrega esto a tu archivo JavaScript (java.js) */

// Función para mostrar la animación de carga
function mostrarCarga() {
    document.getElementById('loader-container').style.display = 'flex';
}

// Función para ocultar la animación de carga
function ocultarCarga() {
    document.getElementById('loader-container').style.display = 'none';
}

// Agrega un evento click a todos los enlaces para mostrar la animación antes de cambiar de página
document.querySelectorAll('.boton a').forEach(enlace => {
    enlace.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        mostrarCarga(); // Muestra la animación de carga

        // Simula un retraso antes de cambiar de página (puedes ajustar el tiempo según tus necesidades)
        setTimeout(() => {
            window.location.href = enlace.getAttribute('href');
            ocultarCarga(); // Oculta la animación de carga después de cambiar de página
        }, 1000);
    });
});
