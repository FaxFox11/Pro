// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Load components
    loadComponent('nav-container', 'nav.html');
    loadComponent('hero-container', 'hero.html');
    loadComponent('features-container', 'features.html');
    loadComponent('portfolio-container', 'portfolio.html');
    loadComponent('contact-container', 'contact.html');
    
    // Initialize particle effects
    initParticles();
});

async function loadComponent(containerId, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

function initParticles() {
    const particles = document.querySelector('.hero-particles');
    if (!particles) return;
    
    // Create particle elements
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particles.appendChild(particle);
    }
}

// Smooth scroll for navigation
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
