/**
 * HUŞU - Peygamberimizin Sünnetleri
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initLoader();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initBackToTop();
    initSmoothScroll();
    initFilterButtons();
    initSearch();
    initDailySunnet();
});

/**
 * Page Loader
 */
function initLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) return;
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    });
}

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (revealElements.length === 0) return;
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Filter Buttons for Categories
 */
function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('[data-category]');
    
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            filterItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Search Functionality
 */
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchItems = document.querySelectorAll('[data-search]');
    
    if (!searchInput || searchItems.length === 0) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        searchItems.forEach(item => {
            const searchData = item.getAttribute('data-search').toLowerCase();
            
            if (searchData.includes(searchTerm)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
}

/**
 * Daily Sunnet Rotation
 */
function initDailySunnet() {
    const dailySunnetler = [
        {
            icon: '🤲',
            title: 'Tahiyyatü\'l-Mescid',
            description: 'Mescide girildiğinde, oturmadan önce iki rekat namaz kılmak. Peygamber Efendimiz (s.a.v) bu sünneti yerine getirmeyi çok önemsedi.',
            source: 'Buhari, Mevakît Kelâm-ı 25'
        },
        {
            icon: '🌅',
            title: 'Sabah Namazından Sonra Zikir',
            description: 'Sabah namazından sonra "Âyet-el-Kürsi" okumak ve tesbih çekmek. Bu, gün boyu koruma ve bereket sağlar.',
            source: 'Müslim, Zikir 24'
        },
        {
            icon: '🍽️',
            title: 'Yemekten Önce Besmele Çekmek',
            description: 'Yemeğe başlamadan önce "Bismillah" demek. Bu, bereketin artmasına ve şeytanın yemekten uzak durmasına sebep olur.',
            source: 'Tirmizi, Edeb 39'
        },
        {
            icon: '🛏️',
            title: 'Yatmadan Önce Abdest',
            description: 'Uyumadan önce abdest almak ve dua etmek. Peygamber Efendimiz (s.a.v) her gece abdestli yatardı.',
            source: 'Buhari, Vudu 68'
        },
        {
            icon: '👋',
            title: 'Selam Vermek',
            description: 'Karşılaşılan kişilere güler yüzle selam vermek. "Müminler arasında en mükemmel sizden, selam vereninizdir."',
            source: 'Ebû Davud, Edeb 144'
        },
        {
            icon: '🌙',
            title: 'Gece Namazı (Tahaccud)',
            description: 'Gece yarısı kalkıp nafile namaz kılmak. Bu, kulun Rabbine en yakın olduğu zamandır.',
            source: 'Buhari, Tahaccud 1'
        },
        {
            icon: '📿',
            title: 'Sübhanallah, Elhamdülillah, Allahu Ekber',
            description: 'Günde 100 defa tesbih, tahmid ve tekbir söylemek. Bu, Amel defterindeki eksiklikleri tamamlar.',
            source: 'Müslim, Zikir 21'
        }
    ];
    
    const dailyCard = document.querySelector('.daily-card');
    if (!dailyCard) return;
    
    // Get today's sunnet based on date
    const today = new Date().getDay();
    const sunnet = dailySunnetler[today % dailySunnetler.length];
    
    const iconEl = dailyCard.querySelector('.daily-icon');
    const titleEl = dailyCard.querySelector('.daily-title');
    const descEl = dailyCard.querySelector('.daily-description');
    const sourceEl = dailyCard.querySelector('.daily-source');
    
    if (iconEl) iconEl.textContent = sunnet.icon;
    if (titleEl) titleEl.textContent = sunnet.title;
    if (descEl) descEl.textContent = sunnet.description;
    if (sourceEl) sourceEl.innerHTML = '<strong>Kaynak:</strong> ' + sunnet.source;
}

/**
 * Counter Animation for Stats
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                if (target) {
                    animateCounter(counter, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

/**
 * Parallax Effect for Hero
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg-pattern');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/**
 * Reading Progress Bar
 */
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary-color), var(--secondary-light));
        z-index: 10000;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize reading progress on article pages
if (document.querySelector('.detail-section')) {
    initReadingProgress();
}

/**
 * Copy to Clipboard
 */
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Kopyalandı! ✓';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

/**
 * Toast Notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#1e3a2e'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add CSS animation for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
`;
document.head.appendChild(style);
