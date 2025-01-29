// Selecciona todas las preguntas del acordeón
document.querySelectorAll('.accordion-question').forEach(item => {
    item.addEventListener('click', event => {
        // Obtiene el contenido asociado a la pregunta
        const content = item.nextElementSibling;
        const isOpen = content.classList.contains('open');

        // Cierra todas las secciones abiertas
        document.querySelectorAll('.accordion-content.open').forEach(openContent => {
            if (openContent !== content) {
                openContent.classList.remove('open');
            }
        });

        // Abre o cierra la sección actual
        if (!isOpen) {
            content.classList.add('open');
        } else {
            content.classList.remove('open');
        }
    });
});