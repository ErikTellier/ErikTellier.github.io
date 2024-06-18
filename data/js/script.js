function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", function() {
    var birdContainer = document.getElementById('bird_container');

    function randomizeBird(bird) {
        var viewportWidth = window.innerWidth;
        
        var baseDuration = 10;
        var duration = (viewportWidth / 1000) * baseDuration;

        duration = Math.max(5, Math.min(20, duration));
        
        bird.style.animationDuration = `1s, ${duration}s`;
        
        var viewportHeight = window.innerHeight;
        var randomTop = Math.random() * (viewportHeight * 0.8);
        bird.style.top = `${randomTop}px`;

        var randomScale = getRandom(0.4, 1);
        bird.style.transform = `scale(${randomScale})`;
        bird.style.transformOrigin = 'top left';

        var randomDelay = getRandom(1, 3);
        bird.style.animationDelay = `-0.5s, ${randomDelay}s`;
        
        bird.style.animationName = 'none';
        void bird.offsetWidth;
        bird.style.animationName = 'fly-cycle, move-across'; 
    }

    function createBird() {
        var bird = document.createElement('div');
        bird.classList.add('bird');
        randomizeBird(bird);
        birdContainer.appendChild(bird);

        bird.addEventListener('animationiteration', function(event) {
            if (event.animationName === 'move-across') {
                randomizeBird(bird);
            }
        });
    }

    function initializeBirds() {
        birdContainer.innerHTML = '';  

        var birdCount = 5; 
        console.log(`Creating ${birdCount} birds`);
        for (let i = 0; i < birdCount; i++) {
            createBird();
        }
    }

    initializeBirds();

    window.addEventListener('resize', initializeBirds);
});
