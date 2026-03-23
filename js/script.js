// ── TRANSLATIONS ──────────────────────────────
const T = {
  id: {
    'skip':         'Lewati navigasi',
    'nav-projects': 'Proyek',
    'nav-exp':      'Pengalaman',
    'nav-skills':   'Keahlian',
    'nav-edu':      'Pendidikan',
    'nav-contact':  'Kontak',
    'nav-cv-txt':   'Unduh CV',
    'badge-txt':    'Terbuka untuk kerja',
    'hero-desc':    'Lulusan D3 Teknik Informatika UDINUS dengan pengalaman nyata membangun sistem untuk instansi pemerintah dan perusahaan swasta. Menulis kode yang bersih dan peduli pada setiap detail.',
    'btn-projects': 'Lihat Proyek',
    'btn-contact':  'Hubungi Saya',
    's1': 'Perusahaan', 's2': 'Proyek Live', 's3': 'Akurasi Data', 's4': 'Sertifikasi',
    'lbl-proj': 'Karya', 'title-proj': 'Proyek Pilihan',
    'btn-demo': 'Live Demo', 'tag-live': 'Live',
    'pd1': 'Sistem manajemen gudang berbasis cloud untuk PT Bumen Redja Abadi. Sinkronisasi real-time, pencetakan slip pemesanan spare part otomatis, tracking kendaraan terstruktur.',
    'pd2': 'Sistem inventaris berbasis web & mobile untuk Kanwil ATR/BPN Jawa Tengah. Digunakan staf pemerintah setiap hari untuk pengelolaan aset instansi.',
    'pd3': 'Sistem informasi geografis persebaran rumah sakit dan penyakit di Kota Jambi. Data QGIS diintegrasikan ke dalam peta web interaktif.',
    'pd4': 'Platform e-commerce kosmetik dengan katalog produk, manajemen inventaris, dan tampilan responsif yang bersih dan mudah digunakan.',
    'lbl-exp': 'Pengalaman', 'title-exp': 'Riwayat Kerja',
    'now-txt': 'skrg', 'now-badge': 'Sekarang',
    'exp-hint': '↓ klik judul untuk lihat dokumentasi',
    'role1': 'Warranty Service & Systems Developer',
    'role2': 'Operations & Inventory System Administrator',
    'role3': 'Full-Stack Developer & Digital Operations',
    'role4': 'Data Entry Clerk',
    // BRA
    'e1a': 'Merancang dan membangun aplikasi BRA - Warehouse Service berbasis Cloud (Firebase) untuk digitalisasi manajemen gudang servis.',
    'e1b': 'Mengoptimalkan alur permintaan suku cadang dari teknisi melalui sistem inventaris digital, mempercepat proses Service Supply Chain (SSC).',
    'e1c': 'Mengelola input dan validasi data pada sistem Product Quality Report (PQR) serta Warranty Service Claim (WSC) dengan tingkat akurasi tinggi.',
    'e1d': 'Melakukan audit berkala pada Greylite Data untuk memastikan kelengkapan informasi teknis dan integritas database operasional.',
    'e1e': 'Menyusun laporan performa layanan harian dan status klaim garansi.',
    // BPN Admin
    'e2a': 'Mengelola database stok kebutuhan kantor menggunakan workflow terstruktur, berhasil mengurangi potensi stockout hingga 15%.',
    'e2b': 'Bertanggung jawab atas pencatatan transaksi kas harian, rekonsiliasi pendapatan, dan analisis keuntungan bulanan secara sistematis.',
    'e2c': 'Menangani siklus pengadaan barang mulai dari pemilihan vendor, pembelian aset, hingga distribusi ke unit kerja terkait.',
    'e2d': 'Melakukan pengecekan fisik barang (stock opname) secara berkala untuk dicocokkan dengan data digital guna menjamin validitas saldo inventaris.',
    // Data Entry
    'e4a': 'Memproses entri data skala besar (840+ dokumen KK) secara konsisten dengan fokus pada kecepatan dan ketepatan target harian.',
    'e4b': 'Mencapai tingkat akurasi 99% melalui mekanisme verifikasi silang dan data cleaning untuk meminimalkan error rate pada database mitra.',
    'e4c': 'Melakukan perbaikan dan validasi data secara mandiri menggunakan Microsoft Excel sebelum tenggat waktu pengiriman laporan harian.',
    'e4d': 'Beradaptasi dengan ritme kerja dinamis untuk menjaga performa input data tetap stabil di atas standar minimum perusahaan.',
    // BPN Developer
    'e3a': 'Merancang dan mengembangkan aplikasi Web & Mobile berjudul SI-INKA yang terintegrasi sebagai solusi digital inventaris instansi.',
    'e3b': 'Mengelola administrasi aset digital dan kurasi konten informasi publik pada platform digital instansi untuk menjaga keterbukaan informasi.',
    'e3c': 'Mendukung operasional unit Data Center dalam melakukan audit perangkat, capacity planning, dan troubleshooting sistem dasar.',
    'e3d': 'Menyusun manual penggunaan aplikasi dan dokumentasi teknis sebagai standar operasional prosedur bagi pengguna internal.',
    'e3e': 'Melakukan verifikasi data teknis dan pemeliharaan arsip digital untuk menjamin keamanan informasi di lingkungan Data Center.',
    'lbl-sk': 'Keahlian', 'title-sk': 'Tech Stack',
    'sg1': 'Frontend', 'sg2': 'Backend & Database',
    'sg3': 'Tools & Infrastruktur', 'sg4': 'Data & Administrasi',
    'lbl-edu': 'Pendidikan', 'title-edu': 'Latar Belakang',
    'edu1-degree': 'D3 Teknik Informatika',
    'edu1a': 'Aktif dalam Himpunan Mahasiswa D3 Teknik Informatika (HMDTI)',
    'edu1b': 'Panitia Workshop HMDTI 2023',
    'edu1c': 'Meraih penghargaan di lomba Mural Art UDINUS 2018',
    'edu2-degree': 'Pelatihan Kerja Menjahit Pakaian',
    'edu2-grade': 'Nilai A',
    'edu2a': 'Bersertifikat Kompetensi Menjahit Pakaian — Kemenaker RI & BNSP',
    'edu2b': 'Menguasai prosedur K3 di lingkungan kerja',
    'lbl-cert': 'Kredensial', 'title-cert': 'Sertifikasi',
    'c1': 'Sertifikat Kompetensi Keahlian Pemrograman Web',
    'c2': 'Sertifikat Kompetensi Pemrograman Mobile Pratama',
    'c3': 'Sertifikat TOEFL Preparation',
    'c4': 'Seminar Nasional Teknik Informatika',
    'c5': 'Sertifikat Kompetensi Menjahit Pakaian',
    'c6': 'Finalis 8 Besar Business Plan',
    'c7': 'Sertifikat Lomba Mural Art',
    'artistic-txt': 'Di luar kode — aku juga membuat mural, ilustrasi, dan karya jahit. Aku percaya developer yang memahami estetika membangun antarmuka yang lebih baik. Desain bukan dekorasi — desain adalah kejelasan.',
    'lbl-con': 'Kontak', 'con-title': 'Mari berkolaborasi.',
    'con-sub': 'Terbuka untuk posisi full-time, proyek freelance, dan kolaborasi kreatif.',
    'label-name': 'Nama', 'label-email': 'Email', 'label-msg': 'Pesan',
    'btn-send': 'Kirim Pesan', 'or-txt': 'atau hubungi langsung',
    'form-sending': 'Mengirim...', 'form-success': 'Pesan Terkirim!', 'form-error': 'Gagal, coba lagi',
  },
  en: {
    'skip':         'Skip navigation',
    'nav-projects': 'Projects',
    'nav-exp':      'Experience',
    'nav-skills':   'Skills',
    'nav-edu':      'Education',
    'nav-contact':  'Contact',
    'nav-cv-txt':   'Download CV',
    'badge-txt':    'Open to work',
    'hero-desc':    'D3 Informatics Engineering graduate with proven experience building real systems for government institutions and private companies. Clean code, sharp eye for detail.',
    'btn-projects': 'View Projects',
    'btn-contact':  'Get in Touch',
    's1': 'Companies', 's2': 'Live Projects', 's3': 'Data Accuracy', 's4': 'Certifications',
    'lbl-proj': 'Work', 'title-proj': 'Selected Projects',
    'btn-demo': 'Live Demo', 'tag-live': 'Live',
    'pd1': 'Cloud-based warehouse management system for PT Bumen Redja Abadi. Real-time sync, automated spare part slip generation, structured vehicle tracking.',
    'pd2': 'Web & mobile inventory system for Kanwil ATR/BPN Central Java. Used by government staff daily for institutional asset management.',
    'pd3': 'Geographic information system mapping hospital and disease distribution across Jambi city. QGIS data integrated into interactive web map.',
    'pd4': 'Cosmetics e-commerce platform with product catalog, inventory management, and clean responsive UI.',
    'lbl-exp': 'Experience', 'title-exp': 'Work History',
    'now-txt': 'now', 'now-badge': 'Current',
    'exp-hint': '↓ click title to see documentation',
    'role1': 'Warranty Service & Systems Developer',
    'role2': 'Operations & Inventory System Administrator',
    'role3': 'Full-Stack Developer & Digital Operations',
    'role4': 'Data Entry Clerk',
    'e1a': 'Designed and built BRA - Warehouse Service app using Firebase Cloud for service warehouse management digitalization.',
    'e1b': 'Optimized spare part request flow from technicians via digital inventory system, accelerating the Service Supply Chain (SSC) process.',
    'e1c': 'Managed data input and validation for Product Quality Report (PQR) and Warranty Service Claim (WSC) systems with high accuracy.',
    'e1d': 'Conducted periodic audits on Greylite Data to ensure technical information completeness and operational database integrity.',
    'e1e': 'Compiled daily service performance reports and warranty claim status updates.',
    'e2a': 'Managed office supply stock database using structured workflow, successfully reducing stockout risk by up to 15%.',
    'e2b': 'Responsible for daily cash transaction recording, revenue reconciliation, and systematic monthly profit analysis.',
    'e2c': 'Handled procurement cycle from vendor selection, asset purchase, to distribution across work units.',
    'e2d': 'Conducted periodic physical stock checks (stock opname) to match digital data and ensure inventory validity.',
    'e4a': 'Processed large-scale data entry (840+ KK documents) consistently with focus on speed and daily target accuracy.',
    'e4b': 'Achieved 99% accuracy rate through cross-verification and data cleaning to minimize error rate on partner database.',
    'e4c': 'Independently performed data correction and validation using Microsoft Excel before daily report submission deadlines.',
    'e4d': 'Adapted to dynamic work rhythm to maintain data input performance consistently above company minimum standards.',
    'e3a': 'Designed and developed integrated Web & Mobile application titled SI-INKA as institutional digital inventory solution.',
    'e3b': 'Managed digital asset administration and public information content curation on institutional digital platform.',
    'e3c': 'Supported Data Center unit operations in device auditing, capacity planning, and basic system troubleshooting.',
    'e3d': 'Compiled application usage manuals and technical documentation as internal standard operating procedures.',
    'e3e': 'Performed technical data verification and digital archive maintenance to ensure information security in Data Center.',
    'lbl-sk': 'Skills', 'title-sk': 'Tech Stack',
    'sg1': 'Frontend', 'sg2': 'Backend & Database',
    'sg3': 'Tools & Infrastructure', 'sg4': 'Data & Administration',
    'lbl-edu': 'Education', 'title-edu': 'Background',
    'edu1-degree': 'D3 Informatics Engineering',
    'edu1a': 'Active member of D3 Informatics Engineering Student Association (HMDTI)',
    'edu1b': 'Committee member of HMDTI Workshop 2023',
    'edu1c': 'Award recipient at UDINUS Mural Art Competition 2018',
    'edu2-degree': 'Garment Sewing Vocational Training',
    'edu2-grade': 'Grade A',
    'edu2a': 'Certified in Garment Sewing Competency — Kemenaker RI & BNSP',
    'edu2b': 'Trained in Occupational Health & Safety (K3) procedures',
    'lbl-cert': 'Credentials', 'title-cert': 'Certifications',
    'c1': 'Web Programming Competency Certificate',
    'c2': 'Mobile Programming Competency Certificate',
    'c3': 'TOEFL Preparation Certificate',
    'c4': 'National Informatics Engineering Seminar',
    'c5': 'Garment Sewing Competency Certificate',
    'c6': 'Top 8 Finalist — Business Plan Competition',
    'c7': 'Mural Art Competition Award',
    'artistic-txt': 'Beyond code — I also create mural art, illustrations, and sewing works. I believe developers who understand aesthetics build better interfaces. Design is not decoration; it is clarity.',
    'lbl-con': 'Contact', 'con-title': "Let's work together.",
    'con-sub': 'Open to full-time roles, freelance projects, and creative collaborations.',
    'label-name': 'Name', 'label-email': 'Email', 'label-msg': 'Message',
    'btn-send': 'Send Message', 'or-txt': 'or reach out directly',
    'form-sending': 'Sending...', 'form-success': 'Message Sent!', 'form-error': 'Failed, try again',
  }
};

// ── LANG SYSTEM ───────────────────────────────
let currentLang = localStorage.getItem('sz-lang') || 'id';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sz-lang', lang);
  const data = T[lang];

  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.getAttribute('data-id');
    if (data[key] === undefined) return;
    el.textContent = data[key];
  });

  // Restore artistic link
  const artEl = document.querySelector('[data-id="artistic-txt"]');
  if (artEl) {
    artEl.innerHTML = lang === 'id'
      ? 'Di luar kode — aku juga membuat <a href="https://lyferaa.github.io/Lyfera/" target="_blank" rel="noopener noreferrer">mural, ilustrasi, dan karya jahit</a>. Aku percaya developer yang memahami estetika membangun antarmuka yang lebih baik. Desain bukan dekorasi — desain adalah kejelasan.'
      : 'Beyond code — I also create <a href="https://lyferaa.github.io/Lyfera/" target="_blank" rel="noopener noreferrer">mural art, illustrations, and sewing works</a>. I believe developers who understand aesthetics build better interfaces. Design is not decoration; it is clarity.';
  }

  // Update form placeholders
  const nameIn  = document.getElementById('input-name');
  const emailIn = document.getElementById('input-email');
  const msgIn   = document.getElementById('input-message');
  if (nameIn)  nameIn.placeholder  = lang === 'id' ? 'Nama kamu'   : 'Your name';
  if (emailIn) emailIn.placeholder = lang === 'id' ? 'Email kamu'  : 'Your email';
  if (msgIn)   msgIn.placeholder   = lang === 'id'
    ? 'Ceritakan proyekmu atau posisi yang tersedia...'
    : 'Tell me about your project or the role...';

  document.getElementById('html-root').setAttribute('lang', lang);
  document.getElementById('btn-id').classList.toggle('active', lang === 'id');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// ── EXPERIENCE ACCORDION ──────────────────────
function toggleExp(btn) {
  const body      = btn.closest('.exp-body');
  const accordion = body.querySelector('.exp-accordion');
  const isOpen    = btn.getAttribute('aria-expanded') === 'true';

  // Close all others
  document.querySelectorAll('.exp-role-btn[aria-expanded="true"]').forEach(b => {
    if (b === btn) return;
    b.setAttribute('aria-expanded', 'false');
    const acc = b.closest('.exp-body').querySelector('.exp-accordion');
    if (acc) { acc.classList.remove('open'); acc.setAttribute('aria-hidden', 'true'); }
  });

  // Toggle this one
  const next = !isOpen;
  btn.setAttribute('aria-expanded', String(next));
  if (accordion) {
    accordion.classList.toggle('open', next);
    accordion.setAttribute('aria-hidden', String(!next));
  }
}

// ── CONTACT FORM ──────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn    = document.getElementById('btn-submit');
    const txt    = document.getElementById('btn-submit-txt');
    const orig   = txt.textContent;
    btn.disabled = true;
    txt.textContent = T[currentLang]['form-sending'];
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.classList.add('success');
        txt.textContent = T[currentLang]['form-success'];
        form.reset();
        setTimeout(() => { btn.classList.remove('success'); txt.textContent = orig; btn.disabled = false; }, 4000);
      } else throw new Error();
    } catch {
      btn.classList.add('error');
      txt.textContent = T[currentLang]['form-error'];
      setTimeout(() => { btn.classList.remove('error'); txt.textContent = orig; btn.disabled = false; }, 4000);
    }
  });
}

// ── PHOTO FALLBACK (initials SZ) ──────────────
function initPhotoFallback() {
  const wrap = document.querySelector('.photo-wrap');
  const img  = document.querySelector('.hero-photo');
  if (!wrap || !img) return;
  const el = document.createElement('div');
  el.className = 'photo-initials';
  el.textContent = 'SZ';
  wrap.appendChild(el);
  const fallback = () => wrap.classList.add('photo-fallback');
  if (img.complete && img.naturalWidth === 0) fallback();
  else img.addEventListener('error', fallback);
}

// ── IMAGE SHIMMER REMOVAL ─────────────────────
function initImageLoaders() {
  document.querySelectorAll('.proj-img, .exp-photo').forEach(img => {
    const done = () => img.classList.add('loaded');
    if (img.complete && img.naturalWidth > 0) done();
    else { img.addEventListener('load', done); img.addEventListener('error', done); }
  });
}

// ── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-hidden', !open);
}
function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobile-menu');
  const nav  = document.getElementById('nav');
  if (menu.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
});

// ── SCROLL TO TOP ─────────────────────────────
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ── NAV ACTIVE STATE ──────────────────────────
const navLinks = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? 'var(--text)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' }).observe.bind(
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => l.style.color = l.getAttribute('href') === `#${entry.target.id}` ? 'var(--text)' : '');
    });
  }, { rootMargin: '-40% 0px -50% 0px' })
);
// simpler nav observer
['home','projects','experience','skills','education','contact'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      navLinks.forEach(l => l.style.color = l.getAttribute('href') === `#${id}` ? 'var(--text)' : '');
    }
  }, { rootMargin: '-40% 0px -50% 0px' }).observe(el);
});

// ── SCROLL REVEAL ─────────────────────────────
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

function addReveal() {
  document.querySelectorAll('.proj-card, .exp-item, .skill-group, .cert-card, .stat, .edu-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 55}ms`;
    ro.observe(el);
  });
}

// ── KEYBOARD ──────────────────────────────────
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const a = card.querySelector('.proj-links a'); if (a) a.click(); }
  });
});

// ── FOOTER YEAR ───────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  addReveal();
  initContactForm();
  initPhotoFallback();
  initImageLoaders();
});
