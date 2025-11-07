
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a, .btn-action');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            
            link.classList.add('glitch');
            setTimeout(() => {
                link.classList.remove('glitch');
            }, 300); // 0.3 seconde
        });
    });
});


