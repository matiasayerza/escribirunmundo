// Texto que queremos mostrar y el elemento donde se escribirá
const text = "Escribir un Mundo";
const typedTitle = document.getElementById("typed-title");

// Variables para controlar la escritura
let index = 0;
let speed = 150; // Velocidad de escritura en milisegundos

// Función para escribir el texto letra por letra
function typeEffect() {
    if (index < text.length) {
        typedTitle.innerHTML += text.charAt(index); // Añade la letra actual
        index++;
        setTimeout(typeEffect, speed); // Continúa escribiendo
    }
}

// Ejecuta la función al cargar la página
window.onload = function() {
    typeEffect();
};
