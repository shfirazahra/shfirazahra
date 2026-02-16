// Inisialisasi AOS (Animate on Scroll)
AOS.init({ 
    duration: 1000, 
    once: true 
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

// 1. LOGIKA DARK MODE
const btnDark = document.getElementById('darkModeToggle');
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Ganti ikon bulan/matahari
    btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. LOGIKA TRANSLATE (Sederhana)
const btnLang = document.getElementById('langToggle');
btnLang.addEventListener('click', () => {
    const isEN = btnLang.innerText === "EN";
    
    // Ambil elemen yang ingin diganti bahasanya (tambah id/class jika perlu)
    const aboutTitle = document.querySelector('#about h2');
    const skillTitle = document.querySelector('#skills h2');
    const heroText = document.querySelector('.hero-desc');

    if (isEN) {
        if(aboutTitle) aboutTitle.innerText = "About Me";
        if(skillTitle) skillTitle.innerText = "Technical Skills";
        if(heroText) heroText.innerText = "Informatics Engineering student focused on technology and creative design.";
        btnLang.innerText = "ID";
    } else {
        if(aboutTitle) aboutTitle.innerText = "Tentang Saya";
        if(skillTitle) skillTitle.innerText = "Keahlian Teknis";
        if(heroText) heroText.innerText = "Mahasiswa Teknik Informatika yang berfokus pada pengembangan teknologi dan desain kreatif.";
        btnLang.innerText = "EN";
    }
});
