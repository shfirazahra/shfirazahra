<script>
    // 1. Inisialisasi AOS
    AOS.init({ duration: 1000, once: true });

    // 2. Logika Buka Amplop
    function openEnvelope() {
        const overlay = document.getElementById('envelopeOverlay');
        overlay.classList.add('open');
        setTimeout(() => {
            overlay.classList.add('fade-out');
            document.body.classList.remove('no-scroll');
        }, 2500);
    }

    // 3. Logika Sidebar
    function toggleMenu() { 
        document.getElementById('sidebar').classList.toggle('active'); 
    }

    // 4. LOGIKA DARK MODE PINK AESTHETIC
    const btnDark = document.getElementById('darkModeToggle');
    btnDark.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        btnDark.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // 5. LOGIKA TRANSLATE (Teks Hero & Judul)
    const btnLang = document.getElementById('langToggle');
    btnLang.addEventListener('click', () => {
        const isEN = btnLang.innerText === "EN";
        const heroTitle = document.querySelector('.hero h1');
        const heroDesc = document.querySelector('.hero p b'); // Target teks tebal

        if (isEN) {
            heroTitle.innerHTML = "Hi, I'm <span>Shafira Zahra</span> ✨";
            heroDesc.innerText = "Informatics Engineering Graduate from UDINUS. Focus on Front-End & Back-End development and master UI/UX Design practices.";
            btnLang.innerText = "ID";
        } else {
            heroTitle.innerHTML = "Halo, Aku <span>Shafira Zahra</span> ✨";
            heroDesc.innerText = "Lulusan D3 Teknik Informatika UDINUS. Fokus pada pengembangan Front-End & Back-End serta menguasai praktik UI/UX Design.";
            btnLang.innerText = "EN";
        }
    });

    // 6. Efek Partikel
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
</script>
