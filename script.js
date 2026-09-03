// Ambient particle background generator (runs automatically on load)
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('particle-container');
    if (container) {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.classList.add('ambient-particle');
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${6 + Math.random() * 6}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(particle);
        }
    }
});

// Stage 1 Action: Burst Particles & Trigger Album State with Smooth Sound Fade-In
function openGift() {
    const box = document.querySelector('.box-container');
    const music = document.getElementById('bg-music');
    
    // Smoothly fade audio in
    music.volume = 0;
    music.play().then(() => {
        let vol = 0;
        const fadeAudio = setInterval(() => {
            if (vol < 0.8) {
                vol += 0.1;
                music.volume = vol;
            } else {
                clearInterval(fadeAudio);
            }
        }, 200);
    }).catch(e => console.log("Audio autoplay restricted by browser policy until interaction."));

    // Add explosion particle burst rings & screen shake effect
    box.classList.add('explode');
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    
    createParticles(box);

    // Fade out gift box wrapper layout and boot up Album layout seamlessly
    setTimeout(() => {
        document.getElementById('gift-stage').classList.remove('active');
        document.getElementById('album-stage').classList.add('active');
    }, 900);
}

// Sparkle Particle Burst Vector Engine
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('burst-particle');
        
        // Luxury romantic palette
        const colors = ['#ff477e', '#ff7096', '#ffb3c6', '#ffffff', '#ffd166'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';

        const angle = Math.random() * Math.PI * 2;
        const velocity = 80 + Math.random() * 220;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

// Stage 2 Action: Book Album Flipping Code Configuration
const pages = document.querySelectorAll('.page');
let zIndexCounter = pages.length;

pages.forEach((page, index) => {
    page.style.zIndex = zIndexCounter - index;

    page.addEventListener('click', (e) => {
        if (e.target.classList.contains('pulse-text') || e.target.classList.contains('end-page')) return;

        if (page.classList.contains('flipped')) {
            page.classList.remove('flipped');
            page.style.zIndex = zIndexCounter - index;
        } else {
            page.classList.add('flipped');
            page.style.zIndex = index + 1;
        }
    });
});

// Stage 3 Action: Route to love letter layout and trigger staggered cinematic entry
function goToLetter() {
    document.getElementById('album-stage').classList.remove('active');
    document.getElementById('letter-stage').classList.add('active');

    const paragraphs = document.querySelectorAll('.letter-content p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('fade-in-active');
        }, index * 900); // Fluid delayed cascading entry per line
    });
}