// Inisialisasi AOS (Animate on Scroll)
AOS.init({ 
    duration: 1000, 
    once: true 
});

// Tambahan untuk scroll smooth pada sidebar links
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // offset untuk navbar
            behavior: 'smooth'
        });
    });
});

// Tambahkan class saat scroll untuk navbar aesthetic
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// FUNGSI UNTUK MEMBUKA AMPLOP
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    
    // 1. Tambahkan class 'open' untuk memicu animasi tutup amplop & surat naik
    overlay.classList.add('open');
    
    // 2. Tunggu sebentar (sampai surat naik maksimal), lalu hilangkan overlay-nya
    setTimeout(() => {
        overlay.classList.add('fade-out'); // Efek menghilang halus
        
        // 3. Aktifkan kembali scroll pada body agar web bisa dijelajahi
        document.body.classList.remove('no-scroll');
    }, 2500); // 2.5 detik (waktu tunggu yang pas)
}

// Fungsi Sidebar
function toggleMenu() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}

// Efek Partikel (🌸, ✨, 🤍)
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

// Jalankan partikel saat web dimuat
createParticles();
