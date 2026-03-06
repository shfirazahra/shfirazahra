// 1. Inisialisasi Animasi AOS
AOS.init({ duration: 1000, once: true });

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
    document.getElementById('sidebar').classList.toggle('active'); 
}

// 4. Logika Partikel
const particleContainer = document.getElementById('particles');
function createParticles() {
    if(!particleContainer) return;
    particleContainer.innerHTML = '';
    const isDark = document.body.classList.contains('dark-mode');
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
        createParticles();
    });
}

// ============================================================
// 6. DATA TERJEMAHAN LENGKAP (Indonesia <-> English)
//    Format: { id_elemen: [teks_indonesia, teks_inggris] }
//    Index 0 = Indonesia, Index 1 = English
// ============================================================
const translations = {

    // HERO
    'hero-desc': [
        "Seorang Multidisiplin Lulusan D3 Teknik Informatika UDINUS yang menghubungkan ketelitian Administrasi Servis dengan inovasi Front-End Development. Saya memadukan logika sistem, disiplin operasional, dan estetika visual untuk menciptakan solusi digital yang presisi dan intuitif.",
        "A Multidisciplinary Informatics Engineering graduate from UDINUS, bridging Service Administration precision with Front-End Development innovation. I blend system logic, operational discipline, and visual aesthetics to build precise and intuitive digital solutions."
    ],

    // GATEWAY CARDS (sudah Inggris, tapi tetap disertakan buat konsistensi)
    'ProTitle': ['Professional Path', 'Professional Path'],
    'ProDesc':  ['IT & Admin Portfolio', 'IT & Admin Portfolio'],
    'CreTitle': ['Creative Hub', 'Creative Hub'],
    'CreDesc':  ['Art & Sewing Works', 'Art & Sewing Works'],
    'PerTitle': ['The Story', 'The Story'],
    'PerDesc':  ['My Life & Journey', 'My Life & Journey'],

    // JOURNEY: PT Bumen Redja Abadi
    'BRATitle': ['PT Bumen Redja Abadi', 'PT Bumen Redja Abadi'],
    'BRADesc1': [
        '• Menginput data klaim (informasi kendaraan, jenis kendaraan, part yang diganti) ke dalam sistem.',
        '• Inputting claim data (vehicle info, vehicle type, replaced parts) into the system.'
    ],
    'BRADesc2': [
        '• Mengelola dan mengarsipkan semua dokumen klaim garansi (faktur, job order, formulir klaim, foto kerusakan, dll) baik secara fisik maupun digital.',
        '• Managing and archiving all warranty claim documents (invoices, job orders, claim forms, damage photos, etc.) both physically and digitally.'
    ],
    'BRADesc3': [
        '• Memastikan kelengkapan dan keakuratan data klaim sebagai bukti.',
        '• Ensuring the completeness and accuracy of claim data as evidence.'
    ],
    'BRADesc4': [
        '• Berkoordinasi dengan bagian bengkel/teknisi terkait teknis perbaikan dan penggantian part garansi.',
        '• Coordinating with the workshop/technician team on repair procedures and warranty part replacements.'
    ],
    'BRADesc5': [
        '• Membuat laporan mengenai jumlah klaim, status klaim yang ditolak, atau masih dalam proses.',
        '• Generating reports on total claims, rejected statuses, and claims still in progress.'
    ],

    // JOURNEY: ATR/BPN Koperasi
    'BPNTitle': ['Kantor Wilayah ATR/BPN Provinsi Jawa Tengah', 'Regional Office ATR/BPN Central Java Province'],
    'BPNClear': ['Karyawan Koperasi', 'Cooperative Employee'],
    'BPNDesc1': [
        '• Mengelola dan memelihara akurasi data inventaris stok kebutuhan kantor, mengurangi potensi stockout hingga 15%.',
        '• Managing and maintaining office supply inventory data accuracy, reducing stockout risk by up to 15%.'
    ],
    'BPNDesc2': [
        '• Menerapkan alur kerja (workflow) terstruktur untuk prosedur permintaan dan distribusi barang, menjamin efisiensi operasional.',
        '• Implementing a structured workflow for goods request and distribution procedures, ensuring operational efficiency.'
    ],
    'BPNDesc3': [
        '• Bertanggung jawab atas integritas dan kepatuhan data, serta mengkoordinasikan respons terhadap permintaan data mendesak antar unit kerja.',
        '• Responsible for data integrity and compliance, coordinating responses to urgent data requests across work units.'
    ],
    'BPNDesc4': [
        '• Berkolaborasi dengan stakeholder internal untuk memastikan kelancaran operasional dan kebutuhan unit kerja terpenuhi.',
        '• Collaborating with internal stakeholders to ensure smooth operations and fulfill work unit needs.'
    ],

    // JOURNEY: PT Swakarya Insan Mandiri
    'SIMTitle': ['PT Swakarya Insan Mandiri', 'PT Swakarya Insan Mandiri'],
    'SIMDesc1': [
        '• Secara konsisten menginput dan memproses 840 data Kartu Keluarga (KK) untuk mitra FIF.',
        '• Consistently inputting and processing 840 Family Card (KK) records for FIF partners.'
    ],
    'SIMDesc2': [
        '• Mempertahankan tingkat akurasi data 99% melalui verifikasi silang data, secara efektif mengurangi error rate dalam basis data operasional.',
        '• Maintaining a 99% data accuracy rate through cross-verification, effectively reducing error rates in the operational database.'
    ],
    'SIMDesc3': [
        '• Mengoperasikan sistem input data proprietary dan memanfaatkan Microsoft Excel untuk manajemen dan pelaporan data.',
        '• Operating a proprietary data entry system and leveraging Microsoft Excel for data management and reporting.'
    ],
    'SIMDesc4': [
        '• Melakukan pembersihan data (data cleaning) dan validasi data secara teratur untuk memastikan konsistensi dan integritas data historis.',
        '• Regularly performing data cleaning and validation to ensure consistency and integrity of historical data.'
    ],

    // JOURNEY: ATR/BPN Data Engineer
    'KanwilTitle': ['Kantor Wilayah ATR/BPN Provinsi Jawa Tengah', 'Regional Office ATR/BPN Central Java Province'],
    'KanwilDesc1': [
        '• Secara rutin menerapkan pembaruan sistem operasi (patching), firmware, dan upgrade perangkat lunak untuk menjaga keamanan dan kinerja.',
        '• Routinely applying OS patching, firmware updates, and software upgrades to maintain security and performance.'
    ],
    'KanwilDesc2': [
        '• Melakukan perencanaan kapasitas (capacity planning) untuk memastikan sumber daya server dan storage cukup.',
        '• Conducting capacity planning to ensure adequate server and storage resources.'
    ],
    'KanwilDesc3': [
        '• Melakukan audit berkala terhadap perangkat keras dan perangkat lunak untuk memastikan kepatuhan dan mendeteksi kerentanan.',
        '• Performing periodic hardware and software audits to ensure compliance and detect vulnerabilities.'
    ],
    'KanwilDesc4': [
        '• Mendiagnosis dan menyelesaikan masalah kompleks yang berkaitan dengan server, sistem operasi, aplikasi, atau koneksi ke penyimpanan data.',
        '• Diagnosing and resolving complex issues related to servers, operating systems, applications, or storage connections.'
    ],
    'KanwilDesc5': [
        '• Memberikan dukungan teknis kepada tim lain (misalnya developer atau end-user) terkait akses dan masalah pada sistem server.',
        '• Providing technical support to other teams (e.g., developers or end-users) regarding server system access and issues.'
    ],

    // JOURNEY: Milkshake Idola
    'IdolaTitle': ['Milkshake Idola & Seblak Seuhah', 'Milkshake Idola & Seblak Seuhah'],
    'IdolaDesc1': [
        '• Mengelola dan merekapitulasi seluruh transaksi penjualan harian dan memastikan akurasi perhitungan dan keseimbangan kas akhir hari.',
        '• Managing and reconciling all daily sales transactions, ensuring calculation accuracy and end-of-day cash balance.'
    ],
    'IdolaDesc2': [
        '• Mencatat data penjualan dan permintaan pelanggan untuk dianalisis sebagai masukan peningkatan stok dan menu.',
        '• Recording sales data and customer requests for analysis to improve stock and menu offerings.'
    ],
    'IdolaDesc3': [
        '• Berinteraksi langsung dengan pelanggan untuk memahami kebutuhan, mengelola keluhan, dan memastikan kepuasan layanan.',
        '• Directly interacting with customers to understand needs, handle complaints, and ensure service satisfaction.'
    ],
    'IdolaDesc4': [
        '• Bertanggung jawab atas stock management dan kerapian operasional untuk memastikan kualitas layanan yang tinggi.',
        '• Responsible for stock management and operational tidiness to maintain high service quality.'
    ],

    // JOURNEY: UDINUS
    'UDINUSTitle': ['Universitas Dian Nuswantoro', 'Universitas Dian Nuswantoro (UDINUS)'],
    'UDINUSDesc1': ['• Menjadi Panitia Workshop HMDTI Tahun 2023.', '• Served as an organizer for the HMDTI Workshop in 2023.'],
    'UDINUSDesc2': ['• Mengikuti UKM Catur.', '• Participated in the Chess Student Activity Unit (UKM).'],
    'UDINUSDesc3': ['• Menjadi Anggota dan ikut serta aktif dalam kegiatan HMDTI.', '• Actively participated as a member in HMDTI activities.'],

    // JOURNEY: BBPLK
    'BBPLKTitle': ['BBPLK Semarang', 'BBPLK Semarang (Vocational Training Center)'],
    'BBPLKDesc1': ['• Menjahit dengan Alat Jahit Tangan', '• Hand-sewing techniques using manual tools.'],
    'BBPLKDesc2': ['• Menjahit dengan Mesin.', '• Machine sewing operations.'],
    'BBPLKDesc3': ['• Mengikuti Prosedur Keselamatan & Kesehatan di Tempat Kerja (K3).', '• Applied Occupational Health & Safety (K3) procedures.'],

    // JOURNEY: SMA
    'SMA10Title': ['SMA N 10 Semarang', 'SMA N 10 Semarang (Senior High School)'],
    'SMA10Desc1': ['• Mengikuti Ekstrakulikuler Palang Merah Remaja', '• Participated in the Youth Red Cross (PMR) extracurricular.'],
    'SMA10Desc2': ['• Mengikuti Ekstrakulikuler Olimpiade Kimia', '• Participated in the Chemistry Olympiad extracurricular.'],
    'SMA10Desc3': [
        '• Mengikuti Lomba di Sakura No Matsuri Hino Tahun 2017, lomba OSN Ekonomi, lomba Mural Art.',
        '• Competed in Sakura No Matsuri Hino 2017, National Science Olympiad (Economics), and Mural Art competition.'
    ],

    // JOURNEY: SMP
    'SMP6Title': ['SMP N 6 Semarang', 'SMP N 6 Semarang (Junior High School)'],
    'SMP6Desc1': ['• Mengikuti Ekstrakulikuler Karya Ilmiah Remaja', '• Participated in the Youth Scientific Writing (KIR) extracurricular.'],
    'SMP6Desc2': ['• Mengikuti Ekstrakulikuler Catur', '• Participated in the Chess extracurricular.'],
    'SMP6Desc3': ['• Mengikuti Lomba Menulis Cerpen.', '• Competed in a short story writing competition.'],

    // PROJECTS
    'SejatiTitle':  ['Toko Sejati Cosmetics', 'Toko Sejati Cosmetics'],
    'SejatiDesc':   ['Website untuk E-Commerce Toko Sejati Cosmetics', 'E-Commerce website for Toko Sejati Cosmetics.'],
    'BRATitlePro':  ['BRA-WAREHOUSE SERVICE', 'BRA-WAREHOUSE SERVICE'],
    'BRADescPro':   [
        'Sistem Pencatatan detail kendaraan mulai dari Nomor WO, Plat Nomor, hingga Tipe Kendaraan dan Nama Customer secara terstruktur',
        'A structured vehicle recording system covering WO Number, License Plate, Vehicle Type, and Customer Name.'
    ],
    'INKATitle':    ['SI-INKA', 'SI-INKA'],
    'INKADesc':     ['Sistem Inventaris Barang Kanwil ATR/BPN berbasis Website & Mobile', 'Web & Mobile-based inventory management system for ATR/BPN Regional Office.'],
    'GISTitle':     ['PETA PERSEBARAN WILAYAH JAMBI DALAM BENTUK WEB GIS', 'JAMBI REGION DISTRIBUTION MAP IN WEB GIS'],
    'GISDesc':      [
        'Sistem Informasi Geografis Persebaran Rumah Sakit Pada Wilayah Kota Jambi Tahun 2016',
        'Geographic Information System mapping hospital distribution in Jambi City (2016).'
    ],
    'LyferaTitle':  ['Lyfera\'s Art', 'Lyfera\'s Art'],
    'LyferaDesc':   ['Kumpulan berbagai karya seni ku dalam bentuk website yang interaktif', 'A collection of my artworks in an interactive website.'],
};

// Teks yang pakai innerHTML (ada tag <span> di dalamnya)
const htmlTranslations = {
    'hero-h1': [
        'Halo, Aku <span>Shafira Zahra</span> ✨',
        'Hi, I\'m <span>Shafira Zahra</span> ✨'
    ]
};

// Judul tiap section (diambil pakai index urutan)
const sectionTitleTranslations = [
    ['Technical Skills',  'Technical Skills'],
    ['My Journey',        'My Journey'],
    ['Featured Projects', 'Featured Projects'],
    ['Certifications',    'Certifications'],
];

// Short-desc journey yang tidak punya id sendiri
// Format: [id_h3_di_atasnya, teks_ID, teks_EN]
const shortDescMap = [
    ['BRATitle',    'Warranty Service Claim Administrator',       'Warranty Service Claim Administrator'],
    ['SIMTitle',    'Data Entry',                                 'Data Entry'],
    ['KanwilTitle', 'Data Engineer | Data Center',               'Data Engineer | Data Center'],
    ['IdolaTitle',  'F&B Stand Operator',                        'F&B Stand Operator'],
    ['UDINUSTitle', 'D3 Teknik Informatika | IPK 3,51',          'D3 Informatics Engineering | GPA 3.51'],
    ['BBPLKTitle',  'Pelatihan Kerja Menjahit Pakaian Pria | A', 'Vocational Sewing Training (Men\'s Clothing) | Grade A'],
    ['SMA10Title',  'Jurusan MIPA | 82,60',                      'Science Major | Score 82.60'],
    ['SMP6Title',   '84,00',                                     'Score: 84.00'],
];

// Teks tabel sertifikat — pakai id yang akan ditambahkan ke HTML
// Format: [id_td, teks_ID, teks_EN]
const certMap = [
    ['cert-1', 'Sertifikat Kompetensi Keahlian Pemrograman Web',  'Web Programming Competency Certificate'],
    ['cert-2', 'Sertifikat Kompetensi Pemrograman Mobil Pratama', 'Basic Mobile Programming Competency Certificate'],
    ['cert-3', 'TOEFL PREPARATION',                               'TOEFL Preparation'],
    ['cert-4', 'Sertifikat Seminar Nasional Teknik Informatika',  'National Informatics Engineering Seminar Certificate'],
    ['cert-5', 'Sertifikat Kompetensi Menjahit Pakaian',         'Clothing Sewing Competency Certificate'],
    ['cert-6', 'Sertifikat Kompetensi Menjahit Pakaian',         'Clothing Sewing Competency Certificate'],
    ['cert-7', 'Sertifikat Finalis 8 Besar Business Plan',       'Top 8 Business Plan Finalist Certificate'],
    ['cert-8', 'Sertifikat Lomba Mural Art',                     'Mural Art Competition Certificate'],
];

// Tambahkan id ke <td> nama sertifikat saat halaman pertama kali dimuat
(function addCertIds() {
    const rows = document.querySelectorAll('.cert-table tbody tr');
    let certIndex = 0;
    rows.forEach(row => {
        const td = row.querySelectorAll('td')[1]; // kolom kedua = nama sertifikat
        if(td && certMap[certIndex]) {
            td.id = certMap[certIndex][0];
            certIndex++;
        }
    });
})();

// ============================================================
// 7. FUNGSI TERJEMAHAN UTAMA — dipanggil saat tombol EN/ID diklik
// ============================================================
const btnLang = document.getElementById('langToggle');
if(btnLang) {
    btnLang.addEventListener('click', () => {
        const isEN = btnLang.innerText === "EN";
        const i = isEN ? 1 : 0; // 1 = English, 0 = Indonesia

        // Ganti semua elemen berdasarkan id
        for (const [id, texts] of Object.entries(translations)) {
            const el = document.getElementById(id);
            if(el) el.innerText = texts[i];
        }

        // Ganti hero h1 (pakai innerHTML karena ada <span>)
        const heroH1 = document.querySelector('.hero h1');
        if(heroH1) heroH1.innerHTML = htmlTranslations['hero-h1'][i];

        // Ganti judul section
        document.querySelectorAll('.section-title').forEach((el, idx) => {
            if(sectionTitleTranslations[idx]) el.innerText = sectionTitleTranslations[idx][i];
        });

        // Ganti teks keterangan klik di journey
        const journeyHint = document.getElementById('journey-hint');
        if(journeyHint) journeyHint.innerText = isEN
            ? '(Click the place name to see documentation details ✨)'
            : '(Klik nama tempat untuk detail dokumentasi ✨)';

        // Ganti short-desc journey (yang tidak punya id sendiri)
        shortDescMap.forEach(([headerId, textID, textEN]) => {
            const headerEl = document.getElementById(headerId);
            if(headerEl) {
                const parent = headerEl.closest('.journey-item');
                if(parent) {
                    const shortDesc = parent.querySelector('.short-desc:not([id])');
                    if(shortDesc) shortDesc.innerText = isEN ? textEN : textID;
                }
            }
        });

        // Ganti teks nama sertifikat di tabel
        certMap.forEach(([certId, textID, textEN]) => {
            const el = document.getElementById(certId);
            if(el) el.innerText = isEN ? textEN : textID;
        });

        // Ganti header tabel sertifikat
        const certHeaderName   = document.getElementById('cert-header-name');
        const certHeaderIssuer = document.getElementById('cert-header-issuer');
        if(certHeaderName)   certHeaderName.innerText   = isEN ? 'Certificate Name' : 'Nama Sertifikat';
        if(certHeaderIssuer) certHeaderIssuer.innerText = isEN ? 'Issuer'           : 'Penyelenggara';

        // Ganti label tombol
        btnLang.innerText = isEN ? "ID" : "EN";
    });
}

// Jalankan partikel saat halaman pertama kali dibuka
createParticles();

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

// Custom Cursor (hanya aktif di desktop)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed; pointer-events: none; z-index: 99999;
        font-size: 20px; transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    `;
    cursor.innerHTML = '🌸';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        const petal = document.createElement('div');
        petal.innerHTML = ['🌸', '🌺', '✿', '❀', '💮'][Math.floor(Math.random() * 5)];
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
            burst.innerHTML = '🌸';
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
