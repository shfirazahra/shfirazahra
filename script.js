AOS.init({ duration: 1000, once: true });

// 1. Dark Mode
const btnDark = document.getElementById('darkModeToggle');
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 2. Data Kamus untuk Translate
const dataLang = {
    en: {
        about: "About Me",
        hero: "Informatics Engineering Student",
        skills: "Technical Skills",
        exp: "Work Experience"
    },
    id: {
        about: "Tentang Saya",
        hero: "Mahasiswa Teknik Informatika",
        skills: "Keahlian Teknis",
        exp: "Pengalaman Kerja"
    }
};

// 3. Logika Translate
const btnLang = document.getElementById('langToggle');
btnLang.addEventListener('click', () => {
    const isEnglish = btnLang.innerText === "EN";
    const lang = isEnglish ? 'en' : 'id';

    // Ganti teks berdasarkan ID di HTML (pastikan ID ini ada di HTML kamu)
    if(document.querySelector('#about h2')) document.querySelector('#about h2').innerText = dataLang[lang].about;
    if(document.querySelector('.hero-text p')) document.querySelector('.hero-text p').innerText = dataLang[lang].hero;
    if(document.querySelector('#skills h2')) document.querySelector('#skills h2').innerText = dataLang[lang].skills;

    btnLang.innerText = isEnglish ? "ID" : "EN";
});

// 4. Fungsi Buka Amplop & Sidebar tetap sama
function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    overlay.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.classList.remove('no-scroll');
        window.scrollTo(0,0);
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
}

function toggleMenu() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}
