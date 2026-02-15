// 1. Dark Mode
const btnDark = document.getElementById('darkModeToggle');
if(btnDark) {
    btnDark.onclick = function() {
        document.body.classList.toggle('dark-mode');
        this.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
}

// 2. Translate (Kamus Lengkap)
const btnLang = document.getElementById('langToggle');
if(btnLang) {
    btnLang.onclick = function() {
        const isEN = this.innerText === "EN";
        
        // Contoh ganti judul About & Skills
        const aboutTitle = document.querySelector('#about h2');
        const skillsTitle = document.querySelector('#skills h2');

        if(isEN) {
            if(aboutTitle) aboutTitle.innerText = "About Me";
            if(skillsTitle) skillsTitle.innerText = "Technical Skills";
            this.innerText = "ID";
        } else {
            if(aboutTitle) aboutTitle.innerText = "Tentang Saya";
            if(skillsTitle) skillsTitle.innerText = "Keahlian Teknis";
            this.innerText = "EN";
        }
    }
}

// 3. Fungsi Buka Amplop
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    overlay.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.classList.remove('no-scroll');
        window.scrollTo(0,0);
    }, 2500);
}

// 4. Sidebar Menu
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}
