/**
 * Portfolio Website - Interactive Features
 * Author: Alejandro Boattini
 * Description: Smooth animations, scroll effects, and interactive elements
 */

// ============================================
// Intersection Observer for Scroll Animations
// ============================================

/**
 * Observes elements and adds 'visible' class when they enter viewport
 * This triggers CSS animations for fade-in and slide-up effects
 */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
const observeSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe individual cards for staggered animations
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    proyectoCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    const servicioCards = document.querySelectorAll('.servicio-card');
    servicioCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
};

// ============================================
// Navbar Scroll Effect
// ============================================

/**
 * Changes navbar style on scroll
 * Adds shadow and adjusts opacity based on scroll position
 */
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

const handleNavbarScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
};

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

/**
 * Handles smooth scrolling to sections when clicking nav links
 * Adjusts for fixed navbar height
 */
const setupSmoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active link
                updateActiveNavLink(link);
            }
        });
    });
};

/**
 * Updates the active state of navigation links
 */
const updateActiveNavLink = (activeLink) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.color = '';
    });
    activeLink.style.color = 'var(--color-primary)';
};

/**
 * Highlights the current section in the navbar based on scroll position
 */
const highlightNavOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - navbar.offsetHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
        }
    });
};

// ============================================
// Tech Tags Hover Effect
// ============================================

/**
 * Adds interactive hover effect to technology tags
 */
const setupTechTagsInteraction = () => {
    const techTags = document.querySelectorAll('.tech-tag');

    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'var(--color-primary)';
            this.style.color = 'white';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'white';
            this.style.color = 'var(--color-text-dark)';
        });
    });
};

// ============================================
// Service Cards Click Tracking
// ============================================

/**
 * Tracks clicks on service cards (optional analytics integration)
 */
const setupServiceTracking = () => {
    const servicioCards = document.querySelectorAll('.servicio-card');

    servicioCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('.servicio-title').textContent;
            console.log(`Service clicked: ${serviceName}`);

            // Here you could add analytics tracking
            // Example: gtag('event', 'service_click', { service_name: serviceName });
        });
    });
};

// ============================================
// Credential Cards Animation
// ============================================

/**
 * Adds subtle animation to credential cards on hover
 */
const setupCredentialAnimation = () => {
    const credentialItems = document.querySelectorAll('.credential-item');

    credentialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.transition = 'transform 0.5s ease';
        });

        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });
};

// ============================================
// Parallax Effect for Hero Background
// ============================================

/**
 * Creates subtle parallax effect on hero section
 */
const handleParallaxEffect = () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;

    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
};

// ============================================
// Performance: Throttle Scroll Events
// ============================================

/**
 * Throttle function to limit the rate of function calls
 * Improves performance for scroll event handlers
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// Scroll Event Listeners (Throttled)
// ============================================

const handleScroll = throttle(() => {
    handleNavbarScroll();
    highlightNavOnScroll();
    handleParallaxEffect();
}, 100);

window.addEventListener('scroll', handleScroll);

// ============================================
// Page Load Animations
// ============================================

/**
 * Initializes all animations and interactions when page loads
 */
const initAnimations = () => {
    // Add a small delay to ensure smooth initial load
    setTimeout(() => {
        observeSections();
        setupSmoothScroll();
        setupTechTagsInteraction();
        setupServiceTracking();
        setupCredentialAnimation();
    }, 100);
};

// ============================================
// Fallback for Profile Image
// ============================================

/**
 * Handles profile image error and shows placeholder
 */
const handleImageError = () => {
    const profileImage = document.querySelector('.profile-image');

    profileImage.addEventListener('error', function() {
        // Create placeholder with initials
        const wrapper = this.parentElement;
        wrapper.innerHTML = `
            <div style="
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4rem;
                color: white;
                font-weight: 700;
                border: 4px solid white;
            ">AB</div>
        `;
        console.log('Profile image not found. Using placeholder initials.');
    });
};

// ============================================
// Print Styles Support
// ============================================

/**
 * Optimizes page for printing
 */
const setupPrintStyles = () => {
    window.addEventListener('beforeprint', () => {
        // Expand all sections for printing
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('visible');
        });
    });
};

// ============================================
// Accessibility: Keyboard Navigation
// ============================================

/**
 * Ensures proper keyboard navigation for interactive elements
 */
const setupKeyboardNavigation = () => {
    const interactiveElements = document.querySelectorAll('.btn, .servicio-card, .nav-link');

    interactiveElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
};

// ============================================
// Modal de Contacto
// ============================================

/**
 * Gestiona la apertura y cierre del modal de contacto
 */
const setupContactModal = () => {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModal');
    const servicioCards = document.querySelectorAll('.servicio-card');

    // Abrir modal al hacer clic en los servicios
    servicioCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });
    });

    // Cerrar modal con el botón X
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restaurar scroll
    });

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
};

// ============================================
// Initialize Everything on DOM Ready
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio website loaded successfully!');

    initAnimations();
    handleImageError();
    setupPrintStyles();
    setupKeyboardNavigation();
    setupContactModal();

    // Initial navbar state
    handleNavbarScroll();
});

// ============================================
// Handle Page Visibility Changes
// ============================================

/**
 * Pauses/resumes animations when tab is not visible
 * Improves performance and battery life
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab hidden - pausing animations');
    } else {
        console.log('Tab visible - resuming animations');
    }
});

// ============================================
// Export functions for testing (optional)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        throttle,
        observeSections,
        setupSmoothScroll,
        handleNavbarScroll
    };
}
