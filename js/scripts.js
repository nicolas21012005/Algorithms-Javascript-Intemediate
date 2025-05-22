document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('#cont-global section');
    let currentSectionIndex = 0;

    // Mostrar la primera sección por defecto
    sections[currentSectionIndex].classList.add('active');

    // Función para actualizar la visibilidad de las secciones
    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            if (i === index) {
                section.classList.add('active');
            }
        });
        // Desplazar la vista hacia la parte superior de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event listener para el botón "Siguiente"
    document.getElementById('next').addEventListener('click', function () {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        }
    });

    // Event listener para el botón "Anterior"
    document.getElementById('prev').addEventListener('click', function () {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            showSection(currentSectionIndex);
        }
    });

    // Menu toggle
    const botonMenu = document.getElementById('btn-active');
    const ulBotones = document.getElementById('ul-btns');
    
    botonMenu.addEventListener('click', function() {
        ulBotones.classList.toggle('active');
    });

    // Obtener una referencia a la lista de botones y a todas las secciones
    const botones = document.querySelectorAll('#ul-btns button');
    const secciones = document.querySelectorAll('section[id^="cont"]');

    // Agregar un event listener a cada botón del menú de capítulos
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Remover la clase 'active' de todas las secciones
            secciones.forEach(seccion => {
                seccion.classList.remove('active');
            });

            // Obtener el número de capítulo del botón
            const numeroCapitulo = boton.id.replace('cap', '');

            // Actualizar el índice actual según el capítulo seleccionado
            currentSectionIndex = parseInt(numeroCapitulo) - 1;

            // Agregar la clase 'active' a la sección correspondiente
            const seccionActiva = document.getElementById('cont' + numeroCapitulo);
            seccionActiva.classList.add('active');
            ulBotones.classList.remove('active');

            // Actualizar la vista para el nuevo índice
            showSection(currentSectionIndex);
        });
    });
});
