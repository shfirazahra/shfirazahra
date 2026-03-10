// 1. Inisialisasi Animasi AOS
AOS.init({ duration: 1000, once: true });
// (Dark mode preference sudah diterapkan via inline script di <head> agar tidak flicker)

// 2. Fungsi Untuk Buka Amplop Vintage
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
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    const isActive = sidebar.classList.toggle('active');
    // FIX #2: Update aria-expanded sesuai state aktual
    if (hamburger) hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

// FIX #5: Tutup sidebar saat klik di luar area sidebar & hamburger
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (
        sidebar && sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        hamburger && !hamburger.contains(e.target)
    ) {
        sidebar.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// 4. Logika Partikel — Dandelion Canvas
let dandelionCanvas, dandelionCtx, dandelionParticles = [], dandelionAnimId;

function initDandelionCanvas() {
    if (dandelionCanvas) return;
    dandelionCanvas = document.createElement('canvas');
    dandelionCanvas.id = 'dandelion-canvas';
    Object.assign(dandelionCanvas.style, {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: '-1'   // Selalu di belakang semua elemen termasuk amplop
    });
    document.body.appendChild(dandelionCanvas); // append (bukan prepend) agar tidak ganggu DOM order
    dandelionCtx = dandelionCanvas.getContext('2d');
    resizeDandelion();
    window.addEventListener('resize', resizeDandelion);
}

function resizeDandelion() {
    if (!dandelionCanvas) return;
    dandelionCanvas.width  = window.innerWidth;
    dandelionCanvas.height = window.innerHeight;
}

const DANDELION_COLORS_LIGHT = [
    'rgba(255,215,60,',
    'rgba(255,195,40,',
    'rgba(255,235,120,',
    'rgba(240,200,70,',
    'rgba(255,245,160,',
];
const DANDELION_COLORS_DARK = [
    'rgba(255,240,120,',  // kuning terang
    'rgba(255,225,80,',   // gold cerah
    'rgba(255,210,50,',   // gold
    'rgba(255,255,200,',  // hampir putih kuning
    'rgba(255,200,100,',  // amber cerah
];

class DandelionParticle {
    constructor(initial) { this.reset(initial); }
    reset(initial = false) {
        const w = dandelionCanvas.width, h = dandelionCanvas.height;
        const isDark = document.body.classList.contains('dark-mode');
        this.x = Math.random() * w;
        this.y = initial ? Math.random() * h : h + 20;
        this.radius    = isDark ? Math.random() * 3.5 + 1.5 : Math.random() * 2.2 + 0.7;
        this.speedY    = -(Math.random() * 0.55 + 0.25);
        this.speedX    = (Math.random() - 0.5) * 0.35;
        this.swayAmp   = Math.random() * 1.1 + 0.3;
        this.swaySpeed = Math.random() * 0.018 + 0.007;
        this.swayOff   = Math.random() * Math.PI * 2;
        // Dark mode: alpha jauh lebih tinggi agar jelas terlihat
        this.alpha     = isDark ? Math.random() * 0.4 + 0.6 : Math.random() * 0.5 + 0.3;
        this.targetAlpha = this.alpha;
        this.fadeSpeed = Math.random() * 0.004 + 0.002;
        this.rotation  = Math.random() * Math.PI * 2;
        this.rotSpeed  = (Math.random() - 0.5) * 0.013;
        this.type      = Math.random() > 0.4 ? 'circle' : 'wisp';
        this.wispLen   = Math.random() * 6 + 3;
        this.age = 0;
        const palette = isDark ? DANDELION_COLORS_DARK : DANDELION_COLORS_LIGHT;
        this.color = palette[Math.floor(Math.random() * palette.length)];
    }
    update() {
        this.age++;
        this.x += this.speedX + Math.sin(this.age * this.swaySpeed + this.swayOff) * this.swayAmp * 0.05;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        if (this.age < 60) this.alpha = Math.min(this.targetAlpha, this.age / 60 * this.targetAlpha);
        if (this.y < 80)   this.alpha -= this.fadeSpeed;
        if (this.y < -20 || this.alpha <= 0) this.reset();
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        if (this.type === 'circle') {
            const g = ctx.createRadialGradient(0,0,0,0,0,this.radius*2.5);
            g.addColorStop(0,   this.color + '0.9)');
            g.addColorStop(0.5, this.color + '0.5)');
            g.addColorStop(1,   this.color + '0)');
            ctx.beginPath(); ctx.arc(0,0,this.radius*2.5,0,Math.PI*2);
            ctx.fillStyle = g; ctx.fill();
            ctx.beginPath(); ctx.arc(0,0,this.radius*0.6,0,Math.PI*2);
            ctx.fillStyle = this.color + '1)'; ctx.fill();
        } else {
            ctx.strokeStyle = this.color + '0.7)';
            ctx.lineWidth = 0.5; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-this.wispLen); ctx.stroke();
            for (let i = 0; i < 4; i++) {
                const a = (i/4)*Math.PI*2, tl = this.wispLen*0.5;
                ctx.beginPath(); ctx.moveTo(0,-this.wispLen);
                ctx.lineTo(Math.cos(a)*tl, -this.wispLen+Math.sin(a)*tl); ctx.stroke();
            }
            ctx.beginPath(); ctx.arc(0,-this.wispLen,0.8,0,Math.PI*2);
            ctx.fillStyle = this.color+'0.9)'; ctx.fill();
        }
        ctx.restore();
    }
}

let mouseX = -999, mouseY = -999;
window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

function dandelionLoop() {
    dandelionCtx.clearRect(0,0,dandelionCanvas.width,dandelionCanvas.height);
    dandelionParticles.forEach(p => {
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 80) { const f=(80-dist)/80; p.x+=(dx/dist)*f*1.5; p.y+=(dy/dist)*f*1.5; }
        p.update(); p.draw(dandelionCtx);
    });
    dandelionAnimId = requestAnimationFrame(dandelionLoop);
}

function createParticles() {
    initDandelionCanvas();
    const isDark = document.body.classList.contains('dark-mode');

    // Selalu respawn ulang semua partikel agar warna & alpha langsung update
    if (dandelionAnimId) cancelAnimationFrame(dandelionAnimId);
    dandelionParticles = Array.from({length: 60}, (_, i) => new DandelionParticle(i < 40));
    dandelionLoop();
}

// 5. Logika Dark Mode — simpan ke localStorage + apply saat load
const btnDark = document.getElementById('darkModeToggle');

// Apply dark mode ke body saat load (inline script sudah handle background agar tidak flicker)
if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
}

if(btnDark) {
    const storedDark = localStorage.getItem('darkMode') === 'on';
    btnDark.innerText = storedDark ? '☀️' : '🌙';

    btnDark.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        btnDark.innerText = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDark ? 'on' : 'off');
        createParticles();
    });
}

// ============================================================
// 6. DATA TERJEMAHAN LENGKAP (Indonesia <-> English)
// ============================================================
const translations = {
    'hero-desc': [
        "Seorang Multidisiplin Lulusan D3 Teknik Informatika UDINUS yang menghubungkan ketelitian Administrasi Servis dengan inovasi Front-End Development. Saya memadukan logika sistem, disiplin operasional, dan estetika visual untuk menciptakan solusi digital yang presisi dan intuitif.",
        "A Multidisciplinary Informatics Engineering graduate from UDINUS, bridging Service Administration precision with Front-End Development innovation. I blend system logic, operational discipline, and visual aesthetics to build precise and intuitive digital solutions."
    ],
    'ProTitle': ['Professional Path', 'Professional Path'],
    'ProDesc':  ['IT & Admin Portfolio', 'IT & Admin Portfolio'],
    'CreTitle': ['Creative Hub', 'Creative Hub'],
    'CreDesc':  ['Art & Sewing Works', 'Art & Sewing Works'],
    'PerTitle': ['The Story', 'The Story'],
    'PerDesc':  ['My Life & Journey', 'My Life & Journey'],
    'BRATitle': ['PT Bumen Redja Abadi', 'PT Bumen Redja Abadi'],
    'BRADesc1': ['• Menginput data klaim (informasi kendaraan, jenis kendaraan, part yang diganti) ke dalam sistem.', '• Inputting claim data (vehicle info, vehicle type, replaced parts) into the system.'],
    'BRADesc2': ['• Mengelola dan mengarsipkan semua dokumen klaim garansi (faktur, job order, formulir klaim, foto kerusakan, dll) baik secara fisik maupun digital.', '• Managing and archiving all warranty claim documents (invoices, job orders, claim forms, damage photos, etc.) both physically and digitally.'],
    'BRADesc3': ['• Memastikan kelengkapan dan keakuratan data klaim sebagai bukti.', '• Ensuring the completeness and accuracy of claim data as evidence.'],
    'BRADesc4': ['• Berkoordinasi dengan bagian bengkel/teknisi terkait teknis perbaikan dan penggantian part garansi.', '• Coordinating with the workshop/technician team on repair procedures and warranty part replacements.'],
    'BRADesc5': ['• Membuat laporan mengenai jumlah klaim, status klaim yang ditolak, atau masih dalam proses.', '• Generating reports on total claims, rejected statuses, and claims still in progress.'],
    'BPNTitle': ['Kantor Wilayah ATR/BPN Provinsi Jawa Tengah', 'Regional Office ATR/BPN Central Java Province'],
    'BPNClear': ['Karyawan Koperasi', 'Cooperative Employee'],
    'BPNDesc1': ['• Mengelola dan memelihara akurasi data inventaris stok kebutuhan kantor, mengurangi potensi stockout hingga 15%.', '• Managing and maintaining office supply inventory data accuracy, reducing stockout risk by up to 15%.'],
    'BPNDesc2': ['• Menerapkan alur kerja (workflow) terstruktur untuk prosedur permintaan dan distribusi barang, menjamin efisiensi operasional.', '• Implementing a structured workflow for goods request and distribution procedures, ensuring operational efficiency.'],
    'BPNDesc3': ['• Bertanggung jawab atas integritas dan kepatuhan data, serta mengkoordinasikan respons terhadap permintaan data mendesak antar unit kerja.', '• Responsible for data integrity and compliance, coordinating responses to urgent data requests across work units.'],
    'BPNDesc4': ['• Berkolaborasi dengan stakeholder internal untuk memastikan kelancaran operasional dan kebutuhan unit kerja terpenuhi.', '• Collaborating with internal stakeholders to ensure smooth operations and fulfill work unit needs.'],
    'SIMTitle': ['PT Swakarya Insan Mandiri', 'PT Swakarya Insan Mandiri'],
    'SIMDesc1': ['• Secara konsisten menginput dan memproses 840 data Kartu Keluarga (KK) untuk mitra FIF.', '• Consistently inputting and processing 840 Family Card (KK) records for FIF partners.'],
    'SIMDesc2': ['• Mempertahankan tingkat akurasi data 99% melalui verifikasi silang data, secara efektif mengurangi error rate dalam basis data operasional.', '• Maintaining a 99% data accuracy rate through cross-verification, effectively reducing error rates in the operational database.'],
    'SIMDesc3': ['• Mengoperasikan sistem input data proprietary dan memanfaatkan Microsoft Excel untuk manajemen dan pelaporan data.', '• Operating a proprietary data entry system and leveraging Microsoft Excel for data management and reporting.'],
    'SIMDesc4': ['• Melakukan pembersihan data (data cleaning) dan validasi data secara teratur untuk memastikan konsistensi dan integritas data historis.', '• Regularly performing data cleaning and validation to ensure consistency and integrity of historical data.'],
    'KanwilTitle': ['Kantor Wilayah ATR/BPN Provinsi Jawa Tengah', 'Regional Office ATR/BPN Central Java Province'],
    'KanwilDesc1': ['• Secara rutin menerapkan pembaruan sistem operasi (patching), firmware, dan upgrade perangkat lunak untuk menjaga keamanan dan kinerja.', '• Routinely applying OS patching, firmware updates, and software upgrades to maintain security and performance.'],
    'KanwilDesc2': ['• Melakukan perencanaan kapasitas (capacity planning) untuk memastikan sumber daya server dan storage cukup.', '• Conducting capacity planning to ensure adequate server and storage resources.'],
    'KanwilDesc3': ['• Melakukan audit berkala terhadap perangkat keras dan perangkat lunak untuk memastikan kepatuhan dan mendeteksi kerentanan.', '• Performing periodic hardware and software audits to ensure compliance and detect vulnerabilities.'],
    'KanwilDesc4': ['• Mendiagnosis dan menyelesaikan masalah kompleks yang berkaitan dengan server, sistem operasi, aplikasi, atau koneksi ke penyimpanan data.', '• Diagnosing and resolving complex issues related to servers, operating systems, applications, or storage connections.'],
    'KanwilDesc5': ['• Memberikan dukungan teknis kepada tim lain (misalnya developer atau end-user) terkait akses dan masalah pada sistem server.', '• Providing technical support to other teams (e.g., developers or end-users) regarding server system access and issues.'],
    'IdolaTitle': ['Milkshake Idola & Seblak Seuhah', 'Milkshake Idola & Seblak Seuhah'],
    'IdolaDesc1': ['• Mengelola dan merekapitulasi seluruh transaksi penjualan harian dan memastikan akurasi perhitungan dan keseimbangan kas akhir hari.', '• Managing and reconciling all daily sales transactions, ensuring calculation accuracy and end-of-day cash balance.'],
    'IdolaDesc2': ['• Mencatat data penjualan dan permintaan pelanggan untuk dianalisis sebagai masukan peningkatan stok dan menu.', '• Recording sales data and customer requests for analysis to improve stock and menu offerings.'],
    'IdolaDesc3': ['• Berinteraksi langsung dengan pelanggan untuk memahami kebutuhan, mengelola keluhan, dan memastikan kepuasan layanan.', '• Directly interacting with customers to understand needs, manage complaints, and ensure service satisfaction.'],
    'IdolaDesc4': ['• Bertanggung jawab atas stock management dan kerapian operasional untuk memastikan kualitas layanan yang tinggi.', '• Responsible for stock management and operational tidiness to ensure high service quality.'],
    'UDINUSTitle': ['Universitas Dian Nuswantoro', 'Universitas Dian Nuswantoro'],
    'UDINUSDesc1': ['• Menjadi Panitia Workshop HMDTI Tahun 2023.', '• Served as Workshop Committee of HMDTI 2023.'],
    'UDINUSDesc2': ['• Mengikuti UKM Catur.', '• Joined Chess Student Activity Unit.'],
    'UDINUSDesc3': ['• Menjadi Anggota dan ikut serta aktif dalam kegiatan HMDTI.', '• Active member of HMDTI student organization.'],
    'BBPLKTitle': ['BBPLK Semarang', 'BBPLK Semarang'],
    'BBPLKDesc1': ['• Menjahit dengan Alat Jahit Tangan', '• Sewing with hand tools'],
    'BBPLKDesc2': ['• Menjahit dengan Mesin.', '• Sewing with machine.'],
    'BBPLKDesc3': ['• Mengikuti Prosedur Keselamatan & Kesehatan di Tempat Kerja (K3).', '• Following Occupational Health & Safety (K3) procedures.'],
    'SMA10Title': ['SMA N 10 Semarang', 'SMA N 10 Semarang'],
    'SMA10Desc1': ['• Mengikuti Ekstrakurikuler Palang Merah Remaja', '• Joined Youth Red Cross extracurricular.'],
    'SMA10Desc2': ['• Mengikuti Ekstrakurikuler Olimpiade Kimia', '• Joined Chemistry Olympiad extracurricular.'],
    'SMA10Desc3': ['• Mengikuti Lomba di Sakura No Matsuri Hino Tahun 2017, lomba OSN Ekonomi, lomba Mural Art.', '• Participated in Sakura No Matsuri Hino 2017, OSN Economics, and Mural Art competitions.'],
    'SMP6Title': ['SMP N 6 Semarang', 'SMP N 6 Semarang'],
    'SMP6Desc1': ['• Mengikuti Ekstrakurikuler Karya Ilmiah Remaja', '• Joined Youth Science Club extracurricular.'],
    'SMP6Desc2': ['• Mengikuti Ekstrakurikuler Catur', '• Joined Chess extracurricular.'],
    'SMP6Desc3': ['• Mengikuti Lomba Menulis Cerpen.', '• Participated in Short Story Writing competition.'],
    'SejatiTitle': ['Toko Sejati Cosmetics', 'Toko Sejati Cosmetics'],
    'SejatiDesc': ['Website untuk E-Commerce Toko Sejati Cosmetics', 'E-Commerce website for Toko Sejati Cosmetics'],
    'BRATitlePro': ['BRA-WAREHOUSE SERVICE', 'BRA-WAREHOUSE SERVICE'],
    'BRADescPro': ['Sistem Pencatatan detail kendaraan mulai dari Nomor WO, Plat Nomor, hingga Tipe Kendaraan dan Nama Customer secara terstruktur', 'Structured vehicle detail recording system covering WO Number, License Plate, Vehicle Type, and Customer Name.'],
    'INKATitle': ['SI-INKA', 'SI-INKA'],
    'INKADesc': ['Sistem Inventaris Barang Kanwil ATR/BPN berbasis Website & Mobile', 'Website & Mobile-based inventory system for Kanwil ATR/BPN'],
    'GISTitle': ['PETA PERSEBARAN WILAYAH JAMBI DALAM BENTUK WEB GIS', 'JAMBI DISTRIBUTION MAP IN WEB GIS FORMAT'],
    'GISDesc': ['Sistem Informasi Geografis Persebaran Rumah Sakit Pada Wilayah Kota Jambi Tahun 2016', 'Geographic Information System of Hospital Distribution in Jambi City 2016'],
    'LyferaTitle': ["Lyfera's Art", "Lyfera's Art"],
    'LyferaDesc': ['Kumpulan berbagai karya seni ku dalam bentuk website yang interaktif', 'A collection of my artworks in an interactive website format.'],
    'CVText': ['📄 Download CV', '📄 Download CV'],

    // Technical Skills
    'skills-note':    ['Diekstrak dari proyek nyata, pengalaman kerja, dan sertifikasi ✨', 'Extracted from real projects, work experience, and certifications ✨'],
    'legend-proven':  ['= terbukti dari kerja / proyek nyata', '= proven from real work / projects'],
    'legend-familiar':['= familiar / pernah dipelajari', '= familiar / have studied before'],

    // Sertifikat
    'cert1': ['Sertifikat Kompetensi Keahlian Pemrograman Web', 'Web Programming Competency Certificate'],
    'cert2': ['Sertifikat Kompetensi Pemrograman Mobil Pratama', 'Mobile Programming Competency Certificate'],
    'cert3': ['TOEFL PREPARATION', 'TOEFL PREPARATION'],
    'cert4': ['Sertifikat Seminar Nasional Teknik Informatika', 'National Informatics Engineering Seminar Certificate'],
    'cert5': ['Sertifikat Kompetensi Menjahit Pakaian', 'Clothing Sewing Competency Certificate'],
    'cert6': ['Sertifikat Kompetensi Menjahit Pakaian', 'Clothing Sewing Competency Certificate'],
    'cert7': ['Sertifikat Finalis 8 Besar Business Plan', 'Top 8 Finalist Business Plan Certificate'],
    'cert8': ['Sertifikat Lomba Mural Art', 'Mural Art Competition Certificate'],

    // Form Kontak
    'contact-subtitle': ['Tertarik berkolaborasi atau punya pertanyaan? Kirim pesan langsung! ✨', 'Interested in collaborating or have a question? Send a message! ✨'],
    'btn-send': ['Kirim Pesan 💌', 'Send Message 💌'],

    // Sidebar navigation
    'nav-home':             ['Home / Lobby',       'Home / Lobby'],
    'nav-skills':           ['Technical Skills',    'Technical Skills'],
    'nav-projects-pro':     ['IT Projects',         'IT Projects'],
    'nav-certs':            ['IT Certifications',   'IT Certifications'],
    'nav-projects-creative':['Art & Sewing',        'Art & Sewing'],
    'nav-journey':          ['My Story',            'My Story'],
    'nav-contact':          ['Contact',             'Contact'],
};

const htmlTranslations = {
    'hero-h1': [
        'Halo, Aku <span>Shafira Zahra</span> ✨',
        "Hi, I'm <span>Shafira Zahra</span> ✨"
    ]
};

const sectionTitleTranslations = [
    ['Technical Skills', 'Technical Skills'],
    ['My Journey', 'My Journey'],
    ['Featured Projects', 'Featured Projects'],
    ['Certifications', 'Certifications'],
];

const shortDescMap = [
    ['BRATitle',    'Warranty Service Claim Administrator', 'Warranty Service Claim Administrator'],
    ['BPNTitle',    'Karyawan Koperasi',                   'Cooperative Employee'],
    ['SIMTitle',    'Data Entry',                          'Data Entry'],
    ['KanwilTitle', 'Data Engineer | Data Center',         'Data Engineer | Data Center'],
    ['IdolaTitle',  'F&B Stand Operator',                  'F&B Stand Operator'],
    ['UDINUSTitle', 'D3 Teknik Informatika | IPK 3,51',    'D3 Informatics Engineering | GPA 3.51'],
    ['BBPLKTitle',  'Pelatihan Kerja Menjahit Pakaian Pria | A', 'Tailoring Vocational Training | A'],
    ['SMA10Title',  'Jurusan MIPA | 82,60',                'Science Major | 82.60'],
    ['SMP6Title',   '84,00',                               '84.00'],
];

// ============================================================
// 7. FUNGSI TERAPKAN BAHASA
// ============================================================
function applyLanguage(langIndex) {
    for (const [id, texts] of Object.entries(translations)) {
        const el = document.getElementById(id);
        if(el) el.innerText = texts[langIndex];
    }
    const heroH1 = document.querySelector('.hero h1');
    if(heroH1) heroH1.innerHTML = htmlTranslations['hero-h1'][langIndex];

    document.querySelectorAll('.section-title').forEach((el, idx) => {
        if(sectionTitleTranslations[idx]) el.innerText = sectionTitleTranslations[idx][langIndex];
    });

    const journeyHint = document.getElementById('journey-hint');
    if(journeyHint) journeyHint.innerText = langIndex === 1
        ? '(Click the place name to see documentation details ✨)'
        : '(Klik nama tempat untuk detail dokumentasi ✨)';

    shortDescMap.forEach(([headerId, textID, textEN]) => {
        const headerEl = document.getElementById(headerId);
        if(headerEl) {
            const parent = headerEl.closest('.journey-item');
            if(parent) {
                const shortDesc = parent.querySelector('.short-desc:not([id])');
                if(shortDesc) shortDesc.innerText = langIndex === 1 ? textEN : textID;
            }
        }
    });

    const certHeaderName   = document.getElementById('cert-header-name');
    const certHeaderIssuer = document.getElementById('cert-header-issuer');
    const certHeaderYear   = document.getElementById('cert-header-year');
    if(certHeaderName)   certHeaderName.innerText   = langIndex === 1 ? 'Certificate Name' : 'Nama Sertifikat';
    if(certHeaderIssuer) certHeaderIssuer.innerText = langIndex === 1 ? 'Issuer'           : 'Penyelenggara';
    if(certHeaderYear)   certHeaderYear.innerText   = langIndex === 1 ? 'Year'             : 'Tahun';

    // Update placeholder form kontak
    const inputName    = document.getElementById('input-name');
    const inputEmail   = document.getElementById('input-email');
    const inputMessage = document.getElementById('input-message');
    if(inputName)    inputName.placeholder    = langIndex === 1 ? 'Your name 🌸'     : 'Nama kamu 🌸';
    if(inputEmail)   inputEmail.placeholder   = langIndex === 1 ? 'Your email 📧'    : 'Email kamu 📧';
    if(inputMessage) inputMessage.placeholder = langIndex === 1 ? 'Your message... ✨' : 'Pesan kamu... ✨';

    // FIX: Update atribut lang di <html>
    document.getElementById('htmlRoot').setAttribute('lang', langIndex === 1 ? 'en' : 'id');
}

// ============================================================
// 8. TOMBOL BAHASA — FIX: simpan ke localStorage
// ============================================================
const btnLang = document.getElementById('langToggle');
if(btnLang) {
    const storedLang = localStorage.getItem('lang') || 'id';
    const storedLangIndex = storedLang === 'en' ? 1 : 0;
    btnLang.innerText = storedLang === 'en' ? 'ID' : 'EN';
    if(storedLangIndex === 1) applyLanguage(1);

    btnLang.addEventListener('click', () => {
        const isEN = btnLang.innerText === 'EN';
        const langIndex = isEN ? 1 : 0;
        applyLanguage(langIndex);
        btnLang.innerText = isEN ? 'ID' : 'EN';
        localStorage.setItem('lang', isEN ? 'en' : 'id');
    });
}

// FIX 1: Jalankan partikel hanya jika reduced-motion tidak aktif
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
    createParticles();
} else {
    // Kalau reduced-motion aktif, AOS juga dimatikan agar tidak ada transform
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos');
    });
}

// FIX 7: Auto dark mode dari OS jika belum ada preferensi tersimpan
if (!localStorage.getItem('darkMode')) {
    const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (osDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'on');
        const btn = document.getElementById('darkModeToggle');
        if (btn) btn.innerText = '☀️';
    }
}

// FIX: Copyright tahun otomatis update tiap tahun
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// FIX 2: Scroll-to-top — muncul setelah scroll 300px
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

// FIX 3: Active state sidebar — highlight link sesuai section yang sedang dilihat
const sectionIds = ['skills', 'projects', 'certificates', 'journey', 'contact'];
const navMap = {
    'skills':       ['nav-skills'],
    'projects':     ['nav-projects-pro', 'nav-projects-creative'],
    'certificates': ['nav-certs'],
    'journey':      ['nav-journey'],
    'contact':      ['nav-contact'],
};

const observerOptions = { rootMargin: '-40% 0px -40% 0px', threshold: 0 };
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Hapus semua active
            document.querySelectorAll('.sidebar ul li a').forEach(a => a.classList.remove('active'));
            // Tambah active ke link yang sesuai
            const ids = navMap[entry.target.id] || [];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('active');
            });
        }
    });
}, observerOptions);

sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
});

// FIX: Form kontak — feedback sukses/gagal setelah kirim
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-send');
        const originalText = btn.innerHTML;

        btn.innerHTML = '⏳ Mengirim...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                btn.innerHTML = '✅ Pesan Terkirim!';
                btn.style.background = '#4caf50';
                btn.style.opacity = '1';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);
            } else {
                throw new Error('Gagal');
            }
        } catch {
            btn.innerHTML = '❌ Gagal, coba lagi';
            btn.style.background = '#e53935';
            btn.style.opacity = '1';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 4000);
        }
    });
}

// Sembunyikan semua section saat amplop belum dibuka
document.querySelectorAll('.section').forEach(sec => sec.classList.add('section-hidden'));

// Fungsi Utama Filter
function filterContent(category) {
    document.querySelector('.hero').classList.add('section-hidden');
    const backBtn = document.getElementById('backToLobby');
    if(backBtn) backBtn.style.display = 'block';

    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('section-hidden');
        sec.style.display = 'block';
    });

    const allItems = document.querySelectorAll('.journey-item, .card, tbody tr');
    allItems.forEach(item => {
        item.style.display = item.classList.contains('type-' + category) ? '' : 'none';
    });

    if (category === 'pro') {
        document.getElementById('skills').style.display = 'block';
    } else if (category === 'creative') {
        document.getElementById('skills').style.display = 'none';
    } else if (category === 'personal') {
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
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

// Fungsi navigasi dari Sidebar
function navigateFromSidebar(category, targetId) {
    filterContent(category);
    toggleMenu();
    setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// ============================================================
// FIX #2: Custom Cursor — throttle petal agar tidak lag
//         Max 1 petal per 60ms, bukan setiap mousemove event
// ============================================================
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed; pointer-events: none; z-index: 99999;
        font-size: 20px; transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    `;
    cursor.innerHTML = '✿';
    document.body.appendChild(cursor);

    let lastPetalTime = 0;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // FIX: Throttle — max 1 petal per 60ms
        const now = Date.now();
        if (now - lastPetalTime < 60) return;
        lastPetalTime = now;

        const petal = document.createElement('div');
        petal.innerHTML = ['✿', '❀', '✦', '✧', '⁕'][Math.floor(Math.random() * 5)];
        petal.style.cssText = `
            position: fixed; pointer-events: none; z-index: 99998;
            font-size: ${Math.random() * 12 + 8}px;
            left: ${e.clientX}px; top: ${e.clientY}px;
            transform: translate(-50%, -50%); transition: all 0.8s ease; opacity: 1;
        `;
        document.body.appendChild(petal);
        setTimeout(() => {
            petal.style.opacity = '0';
            petal.style.transform = `translate(${(Math.random()-0.5)*60}px, ${Math.random()*40+20}px) rotate(${Math.random()*360}deg)`;
        }, 50);
        setTimeout(() => petal.remove(), 900);
    });

    document.addEventListener('click', (e) => {
        for (let i = 0; i < 6; i++) {
            const burst = document.createElement('div');
            burst.innerHTML = ['✿', '❀', '✦', '·', '⁕'][Math.floor(Math.random()*5)];
            burst.style.cssText = `
                position: fixed; pointer-events: none; z-index: 99998;
                font-size: 16px; left: ${e.clientX}px; top: ${e.clientY}px;
                transform: translate(-50%, -50%); transition: all 0.6s ease; opacity: 1;
            `;
            document.body.appendChild(burst);
            const angle = (i / 6) * 360;
            const distance = Math.random() * 50 + 30;
            setTimeout(() => {
                burst.style.opacity = '0';
                burst.style.left = `${e.clientX + Math.cos(angle) * distance}px`;
                burst.style.top = `${e.clientY + Math.sin(angle) * distance}px`;
            }, 50);
            setTimeout(() => burst.remove(), 700);
        }
    });

    document.body.style.cursor = 'none';
        }
