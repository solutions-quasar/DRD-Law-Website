const CONFIG = {
    business: {
        name: "DRD Law",
        brand: "DRD Law",
        phone: "(506) 857-3594",
        email: "reception@drdlaw.ca",
        address: "720 Main Street, Suite 101, Moncton, NB E1C 1E4",
        tagline: "Legal services in New Brunswick.",
        founder: "Nicole E. Druckman",
        secondaryActions: [
            { label: "Call", icon: "phone", link: "tel:+15068573594" },
            { label: "Email", icon: "message", link: "mailto:reception@drdlaw.ca" },
            { label: "Directions", icon: "map", link: "https://maps.app.goo.gl/vcard" }
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
        bgImage: "images/drd_law_hero_bg.png"
    },
    practiceAreas: [
        { title: "BUSINESS LAW", description: "Comprehensive legal support for entrepreneurs and established companies.", icon: "briefcase", image: "images/business_v1.png", link: "#contact" },
        { title: "IMMIGRATION LAW", description: "Expert guidance for individuals and employers navigating Canadian immigration.", icon: "globe", image: "images/immigration_v1.png", link: "#contact" },
        { title: "REAL ESTATE LAW", description: "Residential & Commercial real estate services throughout New Brunswick.", icon: "home", image: "images/real_estate_v1.png", link: "#contact" },
        { title: "WILLS & ESTATES", description: "Strategic planning to protect your assets and provide for your loved ones.", icon: "document", image: "images/wills_v1.png", link: "#contact" }
    ],
    reviews: [
        {
            name: "Dianne Griffin",
            title: "HR Manager",
            company: "3 Points Aviation",
            text: "We have had the great pleasure of working with your firm on the immigration of Dimitri Ovchinikov. Maggie has been our contact and I have to say it has been a terrific experience, one of helpful, sense of urgency and knowledge. Sincere thanks to you and your staff.",
            rating: 5
        },
        {
            name: "Angie Donahoe",
            title: "Human Resources",
            company: "Corey Craig Group",
            text: "As Director of Human Resources for a large franchisee, we relied on Nicole Druckman and her experienced Team to help us through the immigration process. Nicole is highly knowledgeable and her efficiency and professionalism is second to none.",
            rating: 5
        },
        {
            name: "Rupert Tingley",
            title: "Past President and CEO",
            company: "Marine Atlantic",
            text: "My experiences with Nicole Druckman have all been outstanding. She is easy to speak with and cares for her clients. Her experience and meticulous work, along with her great personality, make it a pleasure to do business.",
            rating: 5
        },
        {
            name: "Fred Monaghan",
            title: "President",
            company: "Burger King Moncton",
            text: "Nicole Druckman has been handling Immigration Applications for my company for the past 4 years. She takes the time to explain possible scenarios and her tireless work ethic and drive for perfection makes her a great asset for us.",
            rating: 5
        }
    ],
    whyChooseUs: [
        {
            title: "Visionary Team",
            description: "A collaborative approach that combines diverse perspectives to find the best legal solutions.",
            icon: `<svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            title: "Personalized Service",
            description: "Detail-oriented legal support tailored specifically to your unique personal or business goals.",
            icon: `<svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
        },
        {
            title: "Deep expertise",
            description: "Decades of experience and profound knowledge of New Brunswick's legal landscape.",
            icon: `<svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
        },
        {
            title: "Absolute Integrity",
            description: "Passionate advocacy built on a foundation of transparency, ethics, and excellence.",
            icon: `<svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
        }
    ],
    steps: [
        {
            title: "Consultation",
            description: "Discuss your legal needs with our expert team.",
            icon: `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.6 1.4 1.4 0 0 1 1.2 2.7 5.7 5.7 0 1 0 7.3 7.1Z"/><path d="M17 3.5a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 1 1-2.8 0Z"/><path d="M21 2v4"/><path d="M19 4h4"/></svg>`
        },
        {
            title: "Strategy",
            description: "We develop a personalized legal plan tailored to your goals.",
            icon: `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`
        },
        {
            title: "Action",
            description: "Executing the strategy with precision and regular updates.",
            icon: `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 7l1.5 3"/><path d="M18 10l-2.5 2.5"/><path d="M16 17l-3-1.5"/><path d="M8 17l3-1.5"/><path d="M6 10l2.5 2.5"/></svg>`
        },
        {
            title: "Resolution",
            description: "Achieving the best possible outcome for your case.",
            icon: `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
        }
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
            <div class="review-attribution">
                <h4>${review.name}</h4>
                <p class="review-meta">${review.title}${review.company ? `, ${review.company}` : ''}</p>
            </div>
        </div>
    `).join('');
}

function renderWhyChooseUs() {
    const container = document.getElementById('why-grid');
    if (!container) return;

    container.innerHTML = CONFIG.whyChooseUs.map(item => `
        <div class="why-card">
            <div class="why-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

function renderPracticeAreas() {
    const container = document.getElementById('practice-container');
    if (!container) return;

    container.innerHTML = CONFIG.practiceAreas.map(area => `
        <div class="practice-card">
            <div class="practice-card-image">
                <img src="${area.image}" alt="${area.title}">
            </div>
            <div class="practice-card-content">
                <h3>${area.title}</h3>
                <p>${area.description}</p>
                <a href="${area.link}" class="link-arrow">Learn More →</a>
            </div>
        </div>
    `).join('');
}

function renderProcess() {
    const container = document.getElementById('process-grid');
    if (!container) return;

    container.innerHTML = CONFIG.steps.map((step, index) => `
        <div class="process-step">
            <div class="step-icon-wrapper">
                <div class="step-num">${index + 1}</div>
                <div class="step-icon">${step.icon}</div>
            </div>
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

    container.innerHTML = CONFIG.faq.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" aria-expanded="false" onclick="toggleFAQ(this)">
                <span>${item.question}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(button) {
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Close all others (optional - standard accordion behavior)
    document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
    }
}


function renderBottomBar() {
    const bar = document.getElementById('bottom-floating-bar');
    if (!bar) return;

    bar.innerHTML = `
        <a href="#" class="bar-link" id="menu-toggle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            <span>Menu</span>
        </a>
        <a href="tel:+15068573594" class="bar-link">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Call</span>
        </a>
        <a href="#contact" class="bar-link">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Message</span>
        </a>
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
