document.addEventListener("DOMContentLoaded", function() {
    var bird = document.querySelector('.bird');
    
    function randomizeBird() {
        var viewportWidth = window.innerWidth;
        
        var baseDuration = 10; // Durée de base pour 1000px
        var duration = (viewportWidth / 1000) * baseDuration; // Durée proportionnelle

        duration = Math.max(5, Math.min(20, duration));
        
        bird.style.animationDuration = `1s, ${duration}s`;
        
        var viewportHeight = window.innerHeight;
        var randomTop = Math.random() * (viewportHeight * 0.8); // entre 0 et 80% de la hauteur du viewport
        bird.style.top = `${randomTop}px`;
        
        bird.style.animationName = 'none'; // Réinitialiser l'animation
        void bird.offsetWidth; // Forcer un reflow
        bird.style.animationName = 'fly-cycle, move-across'; // Réappliquer les animations
    }

    randomizeBird();

    bird.addEventListener('animationiteration', function(event) {
        if (event.animationName === 'move-across') {
            randomizeBird();
        }
    });

    window.addEventListener('resize', randomizeBird);
});
