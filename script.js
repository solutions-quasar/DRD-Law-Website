const CONFIG = {
    business: {
        name: "Delehanty Rinzler Druckman",
        brand: "DRD Law",
        phone: "(506) 857-3594",
        email: "reception@drdlaw.ca",
        address: "720 Main Street, Suite 101, Moncton, NB E1C 1E4",
        tagline: "Legal services in New Brunswick.",
        founder: "Nicole E. Druckman",
        secondaryActions: [
            { label: "Call", icon: "phone", link: "tel:+15068573594" },
            { label: "Email", icon: "message", link: "mailto:reception@drdlaw.ca" },
            { label: "Directions", icon: "map", link: "https://maps.app.goo.gl/..." }
        ]
    },
    theme: {
        darkMode: true,
        font: "Inter, sans-serif",
        primaryColor: "#1a1a1a",
        accentColor: "#c5a47e"
    },
    menu: [
        { label: "Home", link: "index.html" },
        { label: "Practice Areas", link: "practice-areas.html" },
        { label: "FAQ", link: "faq.html" },
        { label: "Contact", link: "contact.html" }
    ],
    hero: {
        title: "Legal services in New Brunswick.",
        subtitle: "A client-focused Law Firm in Moncton working together as a visionary team to provide personalized service in Real Estate, Business, and Immigration.",
        cta: { label: "Request a Consultation", link: "#contact" },
        bgImage: "images/drd_law_hero_bg.webp"
    },
    practiceAreas: [
        { title: "Real Estate", description: "Residential & Commercial real estate services throughout New Brunswick.", icon: "home", link: "practice-areas.html#real-estate" },
        { title: "Business Law", description: "Comprehensive legal support for entrepreneurs and established companies.", icon: "briefcase", link: "practice-areas.html#business" },
        { title: "Immigration", description: "Expert guidance for individuals and employers navigating Canadian immigration.", icon: "globe", link: "practice-areas.html#immigration" },
        { title: "Wills & Estates", description: "Strategic planning to protect your assets and provide for your loved ones.", icon: "document", link: "practice-areas.html#wills" },
        { title: "Corporate & Commercial", description: "Professional advice on corporate structure, contracts, and commercial transactions.", icon: "building", link: "practice-areas.html#corporate" }
    ],
    reviews: [
        { name: "REPLACE WITH REAL REVIEW", text: "Exceptional service and unrivaled customer satisfaction. Highly recommended for any legal needs in Moncton.", rating: 5 },
        { name: "REPLACE WITH REAL REVIEW", text: "The team at DRD Law made the immigration process smooth and stress-free. Very professional.", rating: 5 }
    ],
    whyChooseUs: [
        "Client-focused visionary team approach",
        "Personalized, detail-oriented legal services",
        "Deep roots and expertise in New Brunswick law",
        "Passionate advocacy and commitment to integrity"
    ],
    steps: [
        { title: "Consultation", description: "Discuss your legal needs with our expert team." },
        { title: "Strategy", description: "We develop a personalized legal plan tailored to your goals." },
        { title: "Action", description: "Executing the strategy with precision and regular updates." },
        { title: "Resolution", description: "Achieving the best possible outcome for your case." }
    ],
    faq: [
        { question: "How do I request a consultation?", answer: "You can request a consultation by filling out our contact form, calling us at (506) 857-3594, or emailing reception@drdlaw.ca." },
        { question: "What areas of law do you practice?", answer: "We focus on Real Estate, Business Law, Immigration, and Wills & Estates." },
        { question: "Where is your office located?", answer: "Our office is located in downtown Moncton at 720 Main Street, Suite 101." }
    ],
    team: [
        {
            name: "Nicole E. Druckman",
            title: "Founder & Lawyer",
            credentials: "BSW, LL.B.",
            image: "images/nicole_druckman.png",
            bio: "Nicole E. Druckman is the founding lawyer at Delehanty Rinzler Druckman. Since 2001, she has specialized in Real Estate and Business Law, and introduced Immigration Law in 2004."
        },
        {
            name: "Tracy M. O'Rourke",
            title: "Director of Operations",
            image: "images/tracy_orourke.png",
            bio: "Tracy manages human resources, financial functions, and business operations. With over 30 years of experience, she streamlines processes to support our clients and staff."
        }
    ],
    disclaimers: {
        legal: "Information only. Contacting us does not create a solicitor-client relationship. Do not send confidential information until we confirm representation."
    }
};

// --- RENDER LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderReviews();
    renderWhyChooseUs();
    renderPracticeAreas();
    renderProcess();
    renderTeam();
    renderFAQ();
    renderBottomBar();
    renderMobileMenu();
    setupInteractions();
    injectJSONLD();
});

function renderHero() {
    const hero = CONFIG.hero;
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    heroSection.querySelector('h1').textContent = hero.title;
    heroSection.querySelector('.subheading').textContent = hero.subtitle;
    heroSection.querySelector('.btn-primary').textContent = hero.cta.label;
    heroSection.querySelector('.btn-primary').href = hero.cta.link;
    heroSection.querySelector('img').src = hero.bgImage;
}

function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    container.innerHTML = CONFIG.reviews.map(review => `
        <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"${review.text}"</p>
            <h4>${review.name}</h4>
        </div>
    `).join('');
}

function renderWhyChooseUs() {
    const list = document.getElementById('why-list');
    if (!list) return;

    list.innerHTML = CONFIG.whyChooseUs.map(item => `
        <li>${item}</li>
    `).join('');
}

function renderPracticeAreas() {
    const container = document.getElementById('practice-container');
    if (!container) return;

    container.innerHTML = CONFIG.practiceAreas.map(area => `
        <div class="practice-card">
            <h3>${area.title}</h3>
            <p>${area.description}</p>
            <a href="${area.link}" class="link-arrow">Learn More</a>
        </div>
    `).join('');
}

function renderProcess() {
    const container = document.getElementById('process-container');
    if (!container) return;

    container.innerHTML = CONFIG.steps.map((step, index) => `
        <div class="process-step">
            <div class="step-num">${index + 1}</div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `).join('');
}

function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container) return;

    container.innerHTML = CONFIG.team.map(member => `
        <div class="team-card">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <p class="team-credentials">${member.credentials || ''}</p>
                <p class="team-title">${member.title}</p>
                <p class="team-bio">${member.bio}</p>
            </div>
        </div>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = CONFIG.faq.map(item => `
        <div class="faq-item">
            <button class="faq-question">${item.question}</button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

function renderBottomBar() {
    const bar = document.getElementById('bottom-floating-bar');
    if (!bar) return;

    bar.innerHTML = `
        <button id="menu-toggle" aria-label="Menu">Menu</button>
        <a href="tel:+15068573594" class="bar-link">Call</a>
        <a href="#contact" class="bar-link">Message</a>
    `;
}

function renderMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    if (!overlay) return;

    overlay.innerHTML = `
        <div class="menu-content">
            <button id="menu-close" aria-label="Close">×</button>
            <nav class="mobile-nav">
                ${CONFIG.menu.map(item => `<a href="${item.link}">${item.label}</a>`).join('')}
            </nav>
            <div class="menu-footer">
                <p>${CONFIG.business.phone}</p>
                <p>${CONFIG.business.email}</p>
            </div>
        </div>
    `;
}

function setupInteractions() {
    // Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuToggle && overlay) {
        menuToggle.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuClose && overlay) {
        menuClose.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            q.classList.toggle('active');
            const answer = q.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Form Handling
    const form = document.getElementById('main-contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate success
            setTimeout(() => {
                form.innerHTML = '<div class="success-message"><h3>Thank you!</h3><p>Your message has been sent. We will contact you shortly.</p></div>';
            }, 1000);
        });
    }
}

function injectJSONLD() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": CONFIG.business.name,
        "telephone": CONFIG.business.phone,
        "email": CONFIG.business.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "720 Main Street, Suite 101",
            "addressLocality": "Moncton",
            "addressRegion": "NB",
            "postalCode": "E1C 1E4",
            "addressCountry": "CA"
        },
        "url": window.location.origin
    };
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}
