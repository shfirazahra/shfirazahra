// Inisialisasi AOS (Animate on Scroll)
AOS.init({ duration: 1000, once: true });

// FUNGSI BUKA AMPLOP
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    overlay.classList.add('open');
    
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.classList.remove('no-scroll');
    }, 2500); 
}

// TOGGLE SIDEBAR
function toggleMenu() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}

// SCROLL HALUS UNTUK NAVIGASI
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// PARTIKEL ELEGAN (🌸, ✨, 🤍)
function createParticles() {
    const container = document.getElementById('particles');
    const icons = ['🌸', '✨', '🤍'];
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = icons[Math.floor(Math.random() * icons.length)];
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.fontSize = (Math.random() * 10 + 10) + 'px';
        container.appendChild(p);
    }
}

createParticles();
