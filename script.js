:root {
    --pink-soft: #fffafa;
    --pink-bg: #fdf2f5;
    --rose-gold: #e5a4b4;
    --text-color: #5d4037;
    --white: #ffffff;
    --env-color: #f4d0d9;
    --env-dark: #e5a4b4;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Poppins', sans-serif; background-color: var(--pink-soft); color: var(--text-color); scroll-behavior: smooth; overflow-x: hidden; }
body.no-scroll { overflow: hidden; height: 100vh; position: fixed; width: 100%; }

/* --- ENVELOPE INTRO --- */
.envelope-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-color: #fef6f8; display: flex; justify-content: center; align-items: center;
    z-index: 10000; transition: opacity 1s, visibility 1s;
}
.envelope-wrapper { position: relative; cursor: pointer; width: 300px; height: 200px; transition: 0.4s; }
.envelope-wrapper:hover { transform: scale(1.05); }
.envelope { position: relative; width: 300px; height: 200px; background: var(--env-color); border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.envelope::before {
    content: ""; position: absolute; top: 0; left: 0; z-index: 4;
    border-top: 110px solid var(--env-dark); border-left: 150px solid transparent; border-right: 150px solid transparent;
    transform-origin: top; transition: transform 0.7s ease-in-out 0.2s;
}
.wax-seal {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 45px; height: 45px; background: #d46a81; border-radius: 50%;
    z-index: 5; display: flex; align-items: center; justify-content: center; color: white; transition: 0.5s;
}
.letter {
    position: absolute; bottom: 10px; left: 25px; width: 250px; height: 160px;
    background: white; z-index: 2; transition: transform 0.9s ease-in-out 0.8s;
    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; border: 1px solid #eee;
}
.letter img { width: 60px; height: 60px; border-radius: 50%; margin-bottom: 5px; object-fit: cover; }
.envelope-overlay.open .envelope::before { transform: rotateX(180deg); z-index: 1; }
.envelope-overlay.open .letter { transform: translateY(-130px); }
.envelope-overlay.open .wax-seal { opacity: 0; transform: translate(-50%, -50%) scale(0); }
.envelope-overlay.fade-out { opacity: 0; visibility: hidden; }

/* --- NAVIGATION --- */
nav { display: flex; justify-content: space-between; align-items: center; padding: 15px 5%; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 1000; }
.logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; }
.logo span { color: var(--rose-gold); }
.hamburger div { width: 25px; height: 3px; background: var(--rose-gold); margin: 5px; transition: 0.3s; }

/* --- SIDEBAR --- */
.sidebar { position: fixed; top: 0; left: -280px; width: 250px; height: 100%; background: white; transition: 0.4s; z-index: 999; padding-top: 80px; box-shadow: 2px 0 10px rgba(0,0,0,0.05); }
.sidebar.active { left: 0; }
.sidebar ul { list-style: none; padding: 30px; }
.sidebar li { margin-bottom: 20px; border-bottom: 1px solid var(--pink-bg); padding-bottom: 8px; }
.sidebar a { font-weight: 600; text-decoration: none; color: inherit; }

/* --- HERO SECTION --- */
.hero { padding: 80px 10%; text-align: center; background: linear-gradient(135deg, #fdf2f5 0%, #fffafa 100%); }
.profile-img-hero { width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border: 6px solid white; box-shadow: 0 10px 20px rgba(0,0,0,0.1); margin-bottom: 20px; }
.hero h1 span { color: var(--rose-gold); border-bottom: 2px solid var(--rose-gold); }
.tagline { font-size: 18px; margin-top: 10px; color: #777; }
.hero-desc { max-width: 650px; margin: 15px auto; line-height: 1.7; font-size: 14px; opacity: 0.8; }

/* --- SECTIONS --- */
.section { padding: 80px 8%; text-align: center; }
.section-title { font-family: 'Playfair Display', serif; font-size: 32px; margin-bottom: 40px; position: relative; display: inline-block; }
.section-title::after { content: ''; position: absolute; width: 50%; height: 2px; background: var(--rose-gold); bottom: -8px; left: 25%; }

/* --- SKILLS --- */
.skill-container { max-width: 700px; margin: 0 auto; text-align: left; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.tag { background: white; padding: 6px 15px; border-radius: 20px; font-size: 12px; font-weight: 600; color: var(--rose-gold); border: 1px solid var(--rose-gold); transition: 0.3s; }
.tag:hover { background: var(--rose-gold); color: white; }
.skill-name { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin: 15px 0 5px; }
.skill-bar { width: 100%; height: 8px; background: #eee; border-radius: 10px; overflow: hidden; }
.skill-per { height: 100%; background: var(--rose-gold); transition: 1.5s; }

/* --- JOURNEY --- */
.journey-container { max-width: 600px; margin: 0 auto; border-left: 2px dashed var(--rose-gold); padding-left: 30px; position: relative; }
.journey-item { position: relative; margin-bottom: 30px; text-align: left; cursor: pointer; padding: 10px; border-radius: 10px; transition: 0.3s; }
.journey-item::before { content: '🌸'; position: absolute; left: -43px; top: 12px; background: var(--pink-soft); }
.journey-item h3 { font-size: 17px; }
.journey-detail { max-height: 0; overflow: hidden; transition: 0.5s; opacity: 0; }
.journey-item.active .journey-detail { max-height: 800px; opacity: 1; padding-top: 15px; }
.journey-detail img { width: 100%; border-radius: 10px; margin: 10px 0; }
.full-desc { font-size: 13px; color: #666; line-height: 1.6; }

/* --- CARDS & PROJECTS --- */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.card-link { text-decoration: none; color: inherit; }
.card { background: white; padding: 25px; border-radius: 15px; text-align: left; transition: 0.4s; border: 1px solid #fce4ec; height: 100%; display: flex; flex-direction: column; }
.card:hover { transform: translateY(-10px); box-shadow: 0 10px 25px rgba(229,164,180,0.2); border-color: var(--rose-gold); }
.card-category { font-size: 10px; text-transform: uppercase; letter-spacing: 1.2px; color: #bcaaa4; margin-bottom: 10px; }
.card h3 { color: var(--rose-gold); font-size: 18px; margin-bottom: 10px; font-family: 'Playfair Display', serif; }
.tech-stack { margin-top: auto; padding-top: 15px; display: flex; gap: 5px; flex-wrap: wrap; }
.tech-stack span { font-size: 10px; background: var(--pink-bg); padding: 3px 8px; border-radius: 4px; }
.art-card { background: linear-gradient(to bottom right, #ffffff, #fff5f7); border: 1px dashed var(--rose-gold); }

/* --- TABLES --- */
.table-container { overflow-x: auto; max-width: 800px; margin: 0 auto; }
.cert-table { width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; font-size: 13px; }
.cert-table th { background: var(--rose-gold); color: white; padding: 12px; }
.cert-table td { padding: 12px; border-bottom: 1px solid var(--pink-bg); text-align: left; }
.cert-table tr:hover { background: var(--pink-soft); cursor: pointer; }

/* --- FOOTER --- */
footer { padding: 60px; background: #2d2d2d; color: white; text-align: center; }
.footer-links a { color: var(--rose-gold); margin: 0 15px; text-decoration: none; font-weight: 600; }
.copyright { font-size: 11px; opacity: 0.5; margin-top: 30px; }

/* --- PARTICLES --- */
.particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1; }
.particle { position: absolute; opacity: 0.4; animation: float 15s infinite linear; }
@keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 0.4; }
    90% { opacity: 0.4; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
}
