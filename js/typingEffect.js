document.addEventListener("DOMContentLoaded", function() {
    let typedText = "ESCRIBIR UN MUNDO";
    let typedTitle = document.getElementById("typed-title");
    let i = 0;

    function typeEffect() {
        if (i < typedText.length) {
            typedTitle.innerHTML += typedText.charAt(i);
            i++;
            setTimeout(typeEffect, 150); // Velocidad del efecto
        }
    }

    typeEffect();
});
