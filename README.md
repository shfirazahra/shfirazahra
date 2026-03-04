<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shafira Zahra</title>
    
    <link rel="icon" type="image/png" href="icon.png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
     <link rel="stylesheet" href="style.css">
</head>
<body class="no-scroll">

    <div class="envelope-overlay" id="envelopeOverlay">
        <div class="envelope-wrapper" onclick="openEnvelope()">
            <div class="open-me-text">Open Me</div>
            <div class="envelope">
                <div class="wax-seal">❤</div>
                <div class="letter">
                    <img src="foto-profil.jpeg" alt="Shafira">
                    <p>Welcome to my Portfolio ✨</p>
                </div>
            </div>
        </div>
    </div>

    <div class="particles" id="particles"></div>

    <nav>
        <div class="hamburger" onclick="toggleMenu()">
            <div></div><div></div><div></div>
        </div>
     <div class="logo" data-aos="fade-right">Shafira<span>Zahra</span></div>
        <div style="width: 40px;"></div>
        
        <div class="nav-controls">
        <button id="backToLobby" class="nav-btn" style="display: none; margin-right: 10px;" onclick="showLobby()">🏠 Lobby</button>
        <button id="darkModeToggle" class="nav-btn">🌙</button>
        <button id="langToggle" class="nav-btn">EN</button>
    </div>
    </nav>

    <div class="sidebar" id="sidebar">
       <ul>
    <li><a href="javascript:void(0)" onclick="showLobby(); toggleMenu();">🏠 Home / Lobby</a></li>
    
    <li><a href="javascript:void(0)" onclick="navigateFromSidebar('pro', 'skills')">🛠 Technical Skills</a></li>
    <li><a href="javascript:void(0)" onclick="navigateFromSidebar('pro', 'projects')">💻 IT Projects</a></li>
    <li><a href="javascript:void(0)" onclick="navigateFromSidebar('pro', 'certificates')">📜 IT Certifications</a></li>
    
    <li><a href="javascript:void(0)" onclick="navigateFromSidebar('creative', 'projects')">🎨 Art & Sewing</a></li>
    
    <li><a href="javascript:void(0)" onclick="navigateFromSidebar('personal', 'journey')">🌸 My Story</a></li>
    
    <li><a href="#contact" onclick="toggleMenu()">📧 Contact</a></li>
</ul>
    </div>

   <header class="hero" id="home">
    <img src="foto-profil.jpeg" alt="Shafira Zahra" class="profile-img-hero" data-aos="zoom-in">
    <h1 data-aos="fade-up">Halo, Aku <span>Shafira Zahra</span> ✨</h1>
    <p data-aos="fade-up" data-aos-delay="200" style="max-width: 650px; margin-top: 15px; line-height: 1.7;">
        <b id="hero-desc">Seorang Multidisiplin Lulusan D3 Teknik Informatika UDINUS yang menghubungkan ketelitian Administrasi Servis dengan inovasi Front-End Development. Saya memadukan logika sistem, disiplin operasional, dan estetika visual untuk menciptakan solusi digital yang presisi dan intuitif.</b>
    </p>
    <div data-aos="fade-up" data-aos-delay="300" style="margin-top: 25px;">
        <a href="https://drive.google.com/drive/folders/1bfBt_30iKEXvEBnYyIn_5i6eOZMQtu5a?usp=drive_link" download class="btn-download" id="CVText">
            <span>📄</span> Download CV
        </a>
        <div class="gateway-container" data-aos="fade-up" data-aos-delay="400">
    <div class="gateway-card" onclick="filterContent('pro')">
        <div class="icon">💼</div>
        <h3 id="ProTitle">Professional Path</h3>
        <p id="ProDesc">IT & Admin Portfolio</p>
    </div>
    <div class="gateway-card" onclick="filterContent('creative')">
        <div class="icon">🎨</div>
        <h3 id="CreTitle">Creative Hub</h3>
        <p id="CreDesc">Art & Sewing Works</p>
    </div>
    <div class="gateway-card" onclick="filterContent('personal')">
        <div class="icon">📖</div>
        <h3 id="PerTitle">The Story</h3>
        <p id="PerDesc">My Life & Journey</p>
    </div>
</div>
    </div>
</header>

    <section id="skills" class="section">
        <h2 class="section-title" data-aos="fade-down">Technical Skills</h2>
    <div class="skill-container">
    <div class="skill-item" data-aos="fade-up">
        <div class="skill-info">
            <span class="skill-name">Computational Logic & Problem Solving</span>
            <span class="skill-badge advanced">Advanced</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐⭐</div>
    </div>

    <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
        <div class="skill-info">
            <span class="skill-name">Ethical Compliance & Data Integrity</span>
            <span class="skill-badge advanced">Advanced</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐⭐</div>
    </div>

        <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
        <div class="skill-info">
            <span class="skill-name">Human-Centric Interaction (UI/UX)</span>
            <span class="skill-badge advanced">Advanced</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐⭐</div>
    </div>

         <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
        <div class="skill-info">
            <span class="skill-name">Scientific Data Analysis</span>
            <span class="skill-badge advanced">Intermediate</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐</div>
    </div>

 <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
        <div class="skill-info">
            <span class="skill-name">Database & Information Management</span>
            <span class="skill-badge advanced">Intermediate</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐</div>
    </div>
           <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
        <div class="skill-info">
            <span class="skill-name">System Architecture & SDLC</span>
            <span class="skill-badge advanced">Intermediate</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐</div>
           </div>
        
 <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
        <div class="skill-info">
            <span class="skill-name">Communication</span>
            <span class="skill-badge advanced">Intermediate</span>
        </div>
        <div class="skill-stars">⭐⭐⭐⭐</div>
    </div>
    </div>
    </section>

    <section id="journey" class="section" style="background-color: var(--pink-bg);">
        <h2 class="section-title" data-aos="fade-down">My Journey</h2>
        <p style="margin-bottom: 20px; font-style: italic; font-size: 13px; opacity: 0.7;">(Klik nama tempat untuk detail dokumentasi ✨)</p>
        <div class="journey-container">
            <div class="journey-item type-pro" data-aos="fade-left" onclick="this.classList.toggle('active')">
                <span class="year">2025-2026</span>
                <h3 id="BRATitle">PT Bumen Redja Abadi</h3>
                <p class="short-desc">Warranty Service Claim Administrator</p>
                <div class="journey-detail">
                    <img src="fotobra.jpg" alt="Dokumentasi PT BRA">
                    <p class="full-desc" id="BRADesc1">• Menginput data klaim (informasi kendaraan, jenis kendaraan, part yang diganti ke dalam sistem.</p>
                    <p class="full-desc" id="BRADesc2">• Mengelola dan mengarsipkan semua dokumen klaim garansi (faktur, job order, formulir klaim, foto kerusakan, dll) baik secara fisik maupun digital.</p>
                    <p class="full-desc" id="BRADesc3">• Memastikan kelengkapan dan keakuratan data klaim sebagai bukti.</p>
                    <p class="full-desc" id="BRADesc4">• Berkoordinasi dengan bagian bengkel/teknisi terkait teknis perbaikan dan penggantian part garansi.</p>
                    <p class="full-desc" id="BRADesc5">• Membuat laporan mengenai jumlah klaim, status klaim yang di tolak, atau masih dalam proses.</p>
                </div>
            </div>
            <div class="journey-item type-pro" data-aos="fade-left" data-aos-delay="100" onclick="this.classList.toggle('active')">
                <span class="year">2024-2025</span>
                <h3 id="BPNTitle">Kantor Wilayah ATR/BPN Provinsi Jawa Tengah</h3>
                <p class="short-desc" id="BPNClear">Karyawan Koperasi</p>
                <div class="journey-detail">
                    <img src="Koperasi.jpg" alt="Dokumentasi ATR BPN">
                    <p class="full-desc" id="BPNDesc1">• Mengelola dan memelihara akurasi data inventaris stok kebutuhan kantor, mengurangi potensi stockout hingga 15%.</p>
                    <p class="full-desc" id="BPNDesc2">• Menerapkan alur kerja (workflow) terstruktur untuk prosedur permintaan dan distribusi barang, menjamin efisiensi operasional.</p>
                    <p class="full-desc" id="BPNDesc3">• Bertanggung jawab atas integritas dan kepatuhan data, serta mengkoordinasikan respons terhadap permintaan data mendesak antar unit kerja.</p>
                    <p class="full-desc" id="BPNDesc4">• Berkolaborasi dengan stakeholder internal untuk memastikan kelancaran operasional dan kebutuhan unit kerja terpenuhi.</p>
                </div>
            </div>
            <div class="journey-item type-pro" data-aos="fade-left" data-aos-delay="200" onclick="this.classList.toggle('active')">
                <span class="year">2024-2024</span>
                <h3 id="SIMTitle">PT Swakarya Insan Mandiri</h3>
                <p class="short-desc">Data Entry</p>
                <div class="journey-detail">
                    <img src="SIM.png" alt="Dokumentasi SIM">
                    <p class="full-desc" id="SIMDesc1">• Secara konsisten menginput dan memproses 840 data Kartu Keluarga (KK) untuk mitra FIF.</p>
                    <p class="full-desc" id="SIMDesc2">• Mempertahankan tingkat akurasi data 99% melalui verifikasi silang data, secara efektif mengurangi error rate dalam basis data operasional.</p>
                    <p class="full-desc" id="SIMDesc3">• Mengoperasikan sistem input data proprietary dan memanfaatkan Microsoft Excel untuk manajemen dan pelaporan data.</p>
                    <p class="full-desc" id="SIMDesc4">• Melakukan pembersihan data (data cleaning) dan validasi data secara teratur untuk memastikan konsistensi dan integritas data historis.</p>
                </div>
            </div>
            <div class="journey-item type-pro" data-aos="fade-left" data-aos-delay="300" onclick="this.classList.toggle('active')">
                <span class="year">2023-2024</span>
                <h3 id="KanwilTitle">Kantor Wilayah ATR/BPN Provinsi Jawa Tengah</h3>
                <p class="short-desc">Data Engineer | Data Center</p>
                <div class="journey-detail">
                    <img src="BPN.png" alt="Dokumentasi Data Engineer">
                    <p class="full-desc" id="KanwilDesc1">• Secara rutin menerapkan pembaruan sistem operasi (patching), firmware, dan upgrade perangkat lunak untuk menjaga keamanan dan kinerja.</p>
                    <p class="full-desc" id="KanwilDesc2">• Melakukan perencanaan kapasitas (capacity planning) untuk memastikan sumber daya server dan storage cukup.</p>
                    <p class="full-desc" id="KanwilDesc3">• Melakukan audit berkala terhadap perangkat keras dan perangkat lunak untuk memastikan kepatuhan dan mendeteksi kerentanan.</p>
                    <p class="full-desc" id="KanwilDesc4">• Mendiagnosis dan menyelesaikan masalah kompleks yang berkaitan dengan server, sistem operasi, aplikasi, atau koneksi ke penyimpanan data (storage).</p>
                    <p class="full-desc" id="KanwilDesc5">• Memberikan dukungan teknis kepada tim lain (misalnya developer atau end-user) terkait akses dan masalah pada sistem server.</p>
                </div>
            </div>
            <div class="journey-item type-personal" data-aos="fade-left" data-aos-delay="400" onclick="this.classList.toggle('active')">
                <span class="year">2022-2022</span>
                <h3 id="IdolaTitle">Milkshake Idola & Seblak Seuhah</h3>
                <p class="short-desc">F&B Stand Operator</p>
                <div class="journey-detail">
                    <img src="journey5.jpg" alt="Dokumentasi F&B">
                    <p class="full-desc"  id="IdolaDesc1">• Mengelola dan merekapitulasi seluruh transaksi penjualan harian dan memastikan akurasi dan perhitungan dan keseimbangan kas akhir hari.</p>
                    <p class="full-desc"  id="IdolaDesc2">• Mencatat data penjualan dan permintaan pelanggan untuk dianalisis sebagai masukan peningkatan stok dan menu.</p>
                    <p class="full-desc"  id="IdolaDesc3">• Berinteraksi langsung dengan pelanggan untuk memahami kebutuhan mengelola keluhan, dan memastikan kepuasan layanan.</p>
                    <p class="full-desc"  id="IdolaDesc4">• Bertanggung jawab atas stock management dan kerapian operasional untuk memastikan kualitas layanan yang tinggi.</p>
                </div>
            </div>
            <div class="journey-item type-pro" data-aos="fade-left" onclick="this.classList.toggle('active')">
                <span class="year">2021-2024</span>
                <h3 id="UDINUSTitle">Universitas Dian Nuswantoro</h3>
                <p class="short-desc">D3 Teknik Informatika | IPK 3,51</p>
                <div class="journey-detail">
                    <img src="wisuda.png" alt="Dokumentasi UDINUS">
                    <p class="full-desc" id="UDINUSDesc1">• Menjadi Panitia Workshop HMDTI Tahun 2023.</p>
                    <p class="full-desc" id="UDINUSDesc2">• Mengikuti UKM Catur.</p>
                    <p class="full-desc" id="UDINUSDesc3">• Menjadi Anggota dan ikut serta aktif dalam kegiatan HMDTI.</p>
                </div>
            </div>
            <div class="journey-item type-creative" data-aos="fade-left" onclick="this.classList.toggle('active')">
                <span class="year">2020-2020</span>
                <h3 id="BBPLKTitle">BBPLK Semarang</h3>
                <p class="short-desc">Pelatihan Kerja Menjahit Pakaian Pria | A</p>
                <div class="journey-detail">
                    <img src="BBPLK.png" alt="Dokumentasi BBPLK">
                    <p class="full-desc" id="BBPLKDesc1">• Menjahit dengan Alat Jahit Tangan</p>
                    <p class="full-desc" id="BBPLKDesc2">• Menjahit dengan Mesin.</p>
                    <p class="full-desc" id="BBPLKDesc3">• Mengikuti Prosedur Keselamatan & Kesehatan di Tempat Kerja (K3).</p>
                </div>
            </div>
            <div class="journey-item type-personal" data-aos="fade-left" onclick="this.classList.toggle('active')">
                <span class="year">2017-2020</span>
                <h3 id="SMA10Title">SMA N 10 Semarang</h3>
                <p class="short-desc">Jurusan MIPA | 82,60</p>
                <div class="journey-detail">
                    <img src="SMA 10.png" alt="Dokumentasi SMA">
                    <p class="full-desc" id="SMA10Desc1">• Mengikuti Ekstakulikuler Palang Merah Remaja</p>
                    <p class="full-desc" id="SMA10Desc2">• Mengikuti Ekstrakulikuler Olimpiade Kimia</p>
                    <p class="full-desc" id="SMA10Desc3">• Mengikuti Lomba di Sakura No Matsuri Hino Tahun 2017, lomba OSN Ekonomi, lomba Mural Art.</p>
                </div>
            </div>
            <div class="journey-item type-personal" data-aos="fade-left" onclick="this.classList.toggle('active')">
                <span class="year">2014-2017</span>
                <h3 id="SMP6Title">SMP N 6 Semarang</h3>
                <p class="short-desc">84,00</p>
                <div class="journey-detail">
                    <img src="smp.jpeg" alt="Dokumentasi SMP">
                    <p class="full-desc" id="SMP6Desc1">• Mengikuti Ekstakulikuler Karya Ilmiah Remaja</p>
                    <p class="full-desc" id="SMP6Desc2">• Mengikuti Ekstrakulikuler Catur</p>
                    <p class="full-desc" id="SMP6Desc3">• Mengikuti Lomba Menulis Cerpen.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section">
        <h2 class="section-title" data-aos="fade-down">Featured Projects</h2>
        <div class="grid">
             <a href="http://tokosejatikosmetik.42web.io/" target="_blank" data-aos="fade-up">
                <div class="card type-pro">
                    <h3 id="SejatiTitle">Toko Sejati Cosmetics</h3>
                    <p id="SejatiDesc">Website untuk E-Commerce Toko Sejati Cosmetics</p>
                    <p class="tech-stack">Tech Stack: Code Igniter 3, PHP, CSS, HTML, MYSQL</p>
                </div>
            </a>
            <a href="https://bra-servicewarehouse.web.app/index.html" target="_blank" data-aos="fade-up" data-aos-delay="100">
                <div class="card type-pro">
                    <h3 id="BRATitlePro">BRA-WAREHOUSE SERVICE</h3>
                    <p id="BRADescPro">Sistem Pencatatan detail kendaraan mulai dari Nomor WO, Plat Nomor, hingga Tipe Kendaraan dan Nama Customer secara terstruktur</p>
                     <p class="tech-stack">Tech Stack: Firebase,Javascript, CSS, HTML</p>
                </div>
            </a>
            <a href="https://appinventorykanwilbpn.42web.io/?i=1" target="_blank" data-aos="fade-up" data-aos-delay="200">
                <div class="card type-pro">
                    <h3 id="INKATitle">SI-INKA</h3>
                    <p id="INKADesc">Sistem Inventaris Barang Kanwil ATR/BPN berbasis Website & Mobile</p>
                     <p class="tech-stack">Tech Stack: Code Igniter 3, PHP, CSS, HTML, MYSQL</p>
                </div>
            </a>
            <a href="https://petapersebarankotajambi.42web.io/?i=1" target="_blank" data-aos="fade-up" data-aos-delay="300">
                <div class="card type-pro">
                    <h3 id="GISTitle">PETA PERSEBARAN WILAYAH JAMBI DALAM BENTUK WEB GIS</h3>
                    <p id="GISDesc">Sistem Informasi Geografis Persebaran Rumah Sakit Pada Wilayah Kota Jambi Tahun 2016</p>
                     <p class="tech-stack">Tech Stack: Code Igniter 3, PHP, CSS, HTML, MYSQL, QGIS</p>
                </div>
            </a>
            <a href="https://lyferaa.github.io/Lyfera/" target="_blank" data-aos="fade-up" data-aos-delay="400">
                <div class="card type-creative">
                    <h3 id="LyferaTitle">Lyfera's Art</h3>
                    <p id="LyferaDesc">Kumpulan berbagai karya seni ku dalam bentuk website yang interaktif</p>
                     <p class="tech-stack">Tech Stack: Javascript, CSS, HTML</p>
                </div>
            </a>
        </div>
    </section>

    <section id="certificates" class="section" style="background-color: var(--pink-bg);">
        <h2 class="section-title" data-aos="zoom-in">Certifications</h2>
        <div style="overflow-x: auto; max-width: 800px; margin: 0 auto;" data-aos="fade-up">
            <table class="cert-table">
                <thead>
                    <tr><th>No</th><th>Nama Sertifikat </th><th>Penyelenggara</th></tr>
                </thead>
             <tbody>
    <tr class="type-pro">
        <td>1</td><td>Sertifikat Kompetensi Keahlian Pemrograman Web</td><td>APTI</td>
    </tr>
    <tr class="type-pro">
        <td>2</td><td>Sertifikat Kompetensi Pemrograman Mobil Pratama</td><td>BNSP</td>
    </tr>
    <tr class="type-pro">
        <td>3</td><td>TOEFL PREPARATION</td><td>UDINUS</td>
    </tr>
    <tr class="type-pro">
        <td>4</td><td>Sertifikat Seminar Nasional Teknik Informatika</td><td>UDINUS</td>
    </tr>

    <tr class="type-creative">
        <td>1</td><td>Sertifikat Kompetensi Menjahit Pakaian</td><td>Kemenaker RI</td>
    </tr>
    <tr class="type-creative">
        <td>2</td><td>Sertifikat Kompetensi Menjahit Pakaian</td><td>BNSP</td>
    </tr>
    <tr class="type-personal">
        <td>1</td><td>Sertifikat Finalis 8 Besar Business Plan</td><td>UPGRIS</td>
    </tr>
     <tr class="type-creative">
        <td>3</td><td>Sertifikat Lomba Mural Art</td><td>UDINUS</td>
    </tr>
</tbody>
            </table>
        </div>
    </section>
        
    <footer id="contact">
        <h2 data-aos="fade-up">Get In Touch</h2>
        <div class="footer-links">
            <a href="https://www.linkedin.com/in/shfiraazhraa/" target="_blank">LinkedIn</a>
            <a href="https://instagram.com/shfiraazhraa._" target="_blank">Instagram</a>
           <a href="https://wa.me/628973179630" target="_blank">WhatsApp</a>
        </div>
        <p style="font-size: 11px; opacity: 0.5; margin-top: 30px;">&copy; 2026 Shafira Zahra ✨ Built with Passion</p>
    </footer>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="script.js"></script>
</body>
</html> 
