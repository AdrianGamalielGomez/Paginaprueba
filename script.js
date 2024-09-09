document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');
    this.classList.toggle('toggle');
});

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
});
