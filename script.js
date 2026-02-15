AOS.init({ duration: 1000, once: true });

// 1. Dark Mode Logic
const btnDark = document.getElementById('darkModeToggle');
if(btnDark) {
    btnDark.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// 2. Translate Logic (Sederhana)
const btnLang = document.getElementById('langToggle');
if(btnLang) {
    btnLang.addEventListener('click', () => {
        if(btnLang.innerText === "EN") {
            // Contoh sederhana: Ganti satu judul saja untuk tes
            document.querySelector('.logo').innerHTML = "Shafira<span>Portfolio</span>";
            btnLang.innerText = "ID";
        } else {
            document.querySelector('.logo').innerHTML = "Shafira<span>Zahra</span>";
            btnLang.innerText = "EN";
        }
    });
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
