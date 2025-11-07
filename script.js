/* script.js - Effet GLITCH pour le style Cyberpunk */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a, .btn-action');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Ajoute la classe 'glitch' au survol
            link.classList.add('glitch');
            
            // Supprime la classe après une courte période (simule un "glitch" rapide)
            setTimeout(() => {
                link.classList.remove('glitch');
            }, 300); // 0.3 seconde
        });
    });
});
