// 1. Inisialisasi AOS
AOS.init({ duration: 1000, once: true });

// 2. Dark Mode Logic (Pindahkan ke luar agar aktif segera)
const btnDark = document.getElementById('darkModeToggle');
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 3. Back to Top & Scroll Logic
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) { 
        btn.style.display = "block"; 
    } else { 
        btn.style.display = "none"; 
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 4. Translate Logic
const btnLang = document.getElementById('langToggle');
btnLang.addEventListener('click', () => {
    if(btnLang.innerText === "EN") {
        alert("Switching to English...");
        // Di sini nanti kamu bisa tambahkan logika ganti teks manual
        btnLang.innerText = "ID";
    } else {
        alert("Mengalihkan ke Bahasa Indonesia...");
        btnLang.innerText = "EN";
    }
});

// 5. Fungsi Buka Amplop
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    overlay.classList.add('open');
    
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.classList.remove('no-scroll');
        
        // PENTING: Paksa browser kembali ke paling atas
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Gunakan instant agar tidak ada jeda loncat
        });
    }, 2500);
}


// 6. Sidebar & Particles
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
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.fontSize = (Math.random() * 10 + 10) + 'px';
        container.appendChild(p);
    }
}
createParticles();
