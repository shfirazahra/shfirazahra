// Tambahan untuk scroll smooth pada sidebar links
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // offset untuk navbar
            behavior: 'smooth'
        });
    });
});

// Tambahkan class saat scroll untuk navbar aesthetic
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
    } else {
        nav.style.boxShadow = "none";
    }
});
