// Inisialisasi AOS (Animate on Scroll)
AOS.init({ 
    duration: 1000, 
    once: true 
});

// FUNGSI UNTUK MEMBUKA AMPLOP
function openEnvelope() {
    // 1. Dark Mode Toggle
const btnDark = document.getElementById('darkModeToggle');
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. Back to Top Logic
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) { btn.style.display = "block"; } 
    else { btn.style.display = "none"; }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 3. Simple Translate (Hanya Contoh Logika Dasar)
function toggleLanguage() {
    const btn = document.getElementById('langToggle');
    if(btn.innerText === "EN") {
        // Logika ganti teks ke Inggris (bisa pakai library atau manual)
        alert("Fitur Translate: Ganti teks ke English");
        btn.innerText = "ID";
    } else {
        alert("Translate Feature: Change text to Indonesia");
        btn.innerText = "EN";
    }
}
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
