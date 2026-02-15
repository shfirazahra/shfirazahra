AOS.init({ duration: 1000, once: true });

// DARK MODE
const btnDark = document.getElementById('darkModeToggle');
btnDark.onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

// TRANSLATE (Contoh tes)
const btnLang = document.getElementById('langToggle');
btnLang.onclick = function() {
    if(this.innerText === "EN") {
        document.querySelector('.hero h1').innerText = "Hello, I'm Shafira";
        this.innerText = "ID";
    } else {
        document.querySelector('.hero h1').innerText = "Halo, Aku Shafira";
        this.innerText = "EN";
    }
};

// Pastikan fungsi toggleMenu tetap ada
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}
// 3. Fungsi Buka Amplop (Biar gak loncat)
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    overlay.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.classList.remove('no-scroll');
        window.scrollTo(0, 0); // Kunci posisi ke atas
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
}

// 4. Sidebar & Particles
function toggleMenu() { document.getElementById('sidebar').classList.toggle('active'); }
function createParticles() {
    const container = document.getElementById('particles');
    if(!container) return;
    const icons = ['🌸', '✨', '🤍'];
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = icons[Math.floor(Math.random() * icons.length)];
        p.style.left = Math.random() * 100 + 'vw';
        container.appendChild(p);
    }
}
createParticles();
