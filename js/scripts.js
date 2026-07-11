document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el carrusel de Bootstrap de forma segura
    const carouselElement = document.querySelector("#carouselExampleIndicators");
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true
        });
    }

    // Animaciones de entrada suaves (Fade-in) mediante IntersectionObserver
    const secciones = document.querySelectorAll('.seccion-contenedor');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Una vez visible, deja de observarla para mejorar el rendimiento
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.15, // Se dispara apenas asoma un 15% en la pantalla
            rootMargin: "0px 0px -50px 0px" 
        });

        secciones.forEach(seccion => observer.observe(seccion));
    } else {
        // Plan B por si el navegador es muy antiguo: mostrar todo de inmediato
        secciones.forEach(seccion => seccion.classList.add('visible'));
    }
});