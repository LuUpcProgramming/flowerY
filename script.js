// Configuración de la lluvia de girasoles
const roseCount = 50; // Número de girasoles que caen
const rosesContainer = document.querySelector('.roses-container');

// Función para crear una flor
function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = `${Math.random() * 100}vw`;
    rose.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración de la caída
    rose.style.animationDelay = `${Math.random() * 2}s`; // Retraso inicial aleatorio
    rose.style.backgroundImage = "url('girasol.png')"; // Ruta de la imagen de la flor
    rosesContainer.appendChild(rose);

    // Elimina la flor después de que complete la animación
    rose.addEventListener('animationend', () => {
        rose.remove();
    });
}

// Crear múltiples flores
for (let i = 0; i < roseCount; i++) {
    createRose();
}

// Crear flores periódicamente para mantener la lluvia continua
setInterval(createRose, 1000);
