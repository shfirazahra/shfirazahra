 // 1. Inisialisasi Animasi AOS
    AOS.init({ duration: 1000, once: true });

    // 2. Fungsi Buka Amplop
    function openEnvelope() {
        const overlay = document.getElementById('envelopeOverlay');
        overlay.classList.add('open');
        setTimeout(() => {
            overlay.classList.add('fade-out');
            document.body.classList.remove('no-scroll');
        }, 2500);
    }

    // 3. Fungsi Sidebar/Menu
    function toggleMenu() { 
        document.getElementById('sidebar').classList.toggle('active'); 
    }

    // 4. Logika Partikel (Bintang vs Bunga)
    const particleContainer = document.getElementById('particles');
    function createParticles() {
        if(!particleContainer) return;
        particleContainer.innerHTML = '';
        const isDark = document.body.classList.contains('dark-mode');
        
        // Pilih icon: Kalau gelap Bintang/Planet, kalau terang Bunga/Hati
        const icons = isDark ? ['💫', '🌎', '✨', '🌙'] : ['🌸', '✨', '🎀','💝'];
        
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.innerText = icons[Math.floor(Math.random() * icons.length)];
            p.style.left = Math.random() * 100 + 'vw';
            p.style.top = Math.random() * 100 + 'vh'; 
            p.style.animationDelay = Math.random() * 0 + 's';
            p.style.fontSize = (Math.random() * 15 + 10) + 'px';
            particleContainer.appendChild(p);
        }
    }

    // 5. Logika Dark Mode
    const btnDark = document.getElementById('darkModeToggle');
    if(btnDark) {
        btnDark.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            btnDark.innerText = isDark ? '☀️' : '🌙';
            createParticles(); // Ganti bunga jadi bintang pas diklik
        });
    }

    // 6. Logika Translate (Lengkap Sampai Judul Section)
   const btnLang = document.getElementById('langToggle');
if(btnLang) {
    btnLang.addEventListener('click', () => {
        const isEN = btnLang.innerText === "EN";
        
        const heroTitle = document.querySelector('.hero h1');
        const heroDesc = document.getElementById('hero-desc'); 
        const sectionTitles = document.querySelectorAll('.section-title');

        if (isEN) {
            // VERSI INGGRIS
            heroTitle.innerHTML = "Hi, I'm <span>Shafira Zahra</span> ✨";
            heroDesc.innerText = "A Multidisciplinary Informatics Engineering graduate from UDINUS who bridges Service Administration precision with Front-End Development innovation. I blend system logic, operational discipline, and visual aesthetics to create precise and intuitive digital solutions.";
            
            if(sectionTitles[0]) sectionTitles[0].innerText = "Technical Skills";
            if(sectionTitles[1]) sectionTitles[1].innerText = "My Journey";
            if(sectionTitles[2]) sectionTitles[2].innerText = "Featured Projects";
            if(sectionTitles[3]) sectionTitles[3].innerText = "Certifications";
            
            btnLang.innerText = "ID";
        } else {
            // VERSI INDONESIA
            heroTitle.innerHTML = "Halo, Aku <span>Shafira Zahra</span> ✨";
            heroDesc.innerText = "Seorang Multidisiplin Lulusan D3 Teknik Informatika UDINUS yang menghubungkan ketelitian Administrasi Servis dengan inovasi Front-End Development. Saya memadukan logika sistem, disiplin operasional, dan estetika visual untuk menciptakan solusi digital yang presisi dan intuitif.";
            
            if(sectionTitles[0]) sectionTitles[0].innerText = "Technical Skills";
            if(sectionTitles[1]) sectionTitles[1].innerText = "My Journey";
            if(sectionTitles[2]) sectionTitles[2].innerText = "Featured Projects";
            if(sectionTitles[3]) sectionTitles[3].innerText = "Certifications";
            
            btnLang.innerText = "EN";
        }
    });
}

    // Jalankan partikel saat halaman pertama kali dibuka
    createParticles();
// Awalnya sembunyikan semua section saat amplop belum dibuka
document.querySelectorAll('.section').forEach(sec => sec.classList.add('section-hidden'));

// Fungsi Utama Filter
function filterContent(category) {
    // 1. Sembunyikan Landing Hero & Tampilkan Tombol Kembali
    document.querySelector('.hero').classList.add('section-hidden');
    const backBtn = document.getElementById('backToLobby');
    if(backBtn) backBtn.style.display = 'block';

    // 2. Tampilkan semua section induk
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('section-hidden');
        sec.style.display = 'block';
    });

    // 3. Filter Item di dalam Section (Journey, Projects, Table Rows)
    const allItems = document.querySelectorAll('.journey-item, .card, tbody tr');
    
    allItems.forEach(item => {
        if (item.classList.contains('type-' + category)) {
            item.style.display = ''; // Munculkan (default)
        } else {
            item.style.display = 'none'; // Sembunyikan
        }
    });

    // 4. Penyesuaian Judul & Tampilan khusus
    if (category === 'pro') {
        document.getElementById('skills').style.display = 'block';
    } else if (category === 'creative') {
        document.getElementById('skills').style.display = 'none';
        // Di kategori kreatif, kita sembunyikan section journey karena isinya cuma cerita hidup
        document.getElementById('journey').style.display = 'none'; 
    } else if (category === 'personal') {
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('certificates').style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.refresh();
}

// Fungsi kembali ke Lobby
function showLobby() {
    document.querySelector('.hero').classList.remove('section-hidden');
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('section-hidden'));
    const backBtn = document.getElementById('backToLobby');
    if(backBtn) backBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi navigasi khusus dari Sidebar
function navigateFromSidebar(category, targetId) {
    // 1. Jalankan filter kategori sesuai tujuan
    filterContent(category);
    
    // 2. Tutup sidebar setelah klik
    toggleMenu();
    
    // 3. Beri jeda sedikit agar browser sempat menampilkan section-nya, lalu scroll
    setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}

// Pastikan fungsi toggleMenu kamu tetap seperti ini
function toggleMenu() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}
