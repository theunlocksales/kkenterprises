// ============================================
// FINARROW - MULTI-PAGE WEBSITE JAVASCRIPT
// Navigation, Forms, EMI Calculator, Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Navigation =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu on regular link click (not dropdowns)
        document.querySelectorAll('.nav-link:not(.nav-dropdown > .nav-link)').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ===== Mobile Dropdown Toggle (BEST FIX - NO # IN URL) =====
    const dropdownLinks = document.querySelectorAll('.nav-dropdown > .nav-link');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Only toggle dropdown on mobile
            if (window.innerWidth <= 768) {
                // Close other dropdowns
                dropdownLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.parentElement.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                this.parentElement.classList.toggle('active');
            }

            return false;
        });
    });

    // Close dropdown when clicking dropdown item on mobile
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const navMenu = document.getElementById('navMenu');
                const hamburger = document.getElementById('hamburger');
                if (navMenu) navMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                // Close all dropdowns
                dropdownLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
            }
        });
    });

    // ===== Navbar scroll state =====
    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Smooth scroll for in-page anchors =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (!target) return;
                const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
                smoothScrollTo(targetY, 600);
            }
        });
    });

    function smoothScrollTo(targetY, duration = 600) {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        function scroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, startY + distance * ease);
            if (progress < 1) requestAnimationFrame(scroll);
        }

        requestAnimationFrame(scroll);
    }

    // ===== Counter Animation =====
    const counters = document.querySelectorAll('.counter');
    if (counters.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target') || '0', 10);
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(target * eased);
            element.textContent = current.toLocaleString('en-IN');
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // ===== EMI Calculator (Compact Version) =====
    const loanAmtSlider = document.getElementById('loanAmt');
    const interestSlider = document.getElementById('interestRate');
    const tenureSlider = document.getElementById('tenure');
    const loanAmtValue = document.getElementById('loanAmtValue');
    const interestValue = document.getElementById('interestValue');
    const tenureValue = document.getElementById('tenureValue');
    const emiResult = document.getElementById('emiResult');

    if (loanAmtSlider && interestSlider && tenureSlider) {
        function calculateEMI() {
            const principal = parseInt(loanAmtSlider.value);
            const rate = parseFloat(interestSlider.value) / 12 / 100;
            const tenure = parseInt(tenureSlider.value) * 12;

            // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
            const emi = (principal * rate * Math.pow(1 + rate, tenure)) /
                        (Math.pow(1 + rate, tenure) - 1);

            // Update displays
            loanAmtValue.textContent = `₹${(principal / 100000).toFixed(1)} Lakh`;
            interestValue.textContent = `${interestSlider.value}%`;
            tenureValue.textContent = `${tenureSlider.value} Years`;
            emiResult.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
        }

        loanAmtSlider.addEventListener('input', calculateEMI);
        interestSlider.addEventListener('input', calculateEMI);
        tenureSlider.addEventListener('input', calculateEMI);

        // Initial calculation
        calculateEMI();
    }

    // ===== AOS Init (scroll animations) =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80
        });
    }

    // ===== Back-to-top button =====
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        smoothScrollTo(0, 600);
    });

    // ===== Hero video safe autoplay =====
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {
            // Autoplay blocked - ignore silently
        });
    }

    // ===== Contact form → WhatsApp redirect =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            if (!data.name || !data.phone) {
                showToast('Please fill all required fields.', 'error');
                return;
            }

            const phoneClean = (data.phone || '').replace(/[^0-9]/g, '');
            if (phoneClean.length < 10) {
                showToast('Enter a valid phone number.', 'error');
                return;
            }

            if (data.email && !validateEmail(data.email)) {
                showToast('Enter a valid email address.', 'error');
                return;
            }

            const msg =
                `Hi Finarrow,%0A%0A` +
                `Name: ${data.name || ''}%0A` +
                `Phone: ${data.phone || ''}%0A` +
                `Email: ${data.email || ''}%0A` +
                `Loan Type: ${data.loanType || ''}%0A` +
                `Amount: ${data.amount || ''}%0A` +
                `Message: ${data.message || ''}`;

            const waUrl = `https://wa.me/917838393421?text=${msg}`;
            showToast('Redirecting to WhatsApp...', 'success');

            setTimeout(() => {
                window.open(waUrl, '_blank');
                contactForm.reset();
            }, 800);
        });
    }

    function validateEmail(email) {
        const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        return re.test(email);
    }

    // ===== Toast Notifications =====
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `finarrow-toast finarrow-toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">
                ${type === 'success'
                    ? '<i class="fas fa-check-circle"></i>'
                    : type === 'error'
                    ? '<i class="fas fa-exclamation-circle"></i>'
                    : '<i class="fas fa-info-circle"></i>'}
            </span>
            ${message}
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 50);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Make showToast available globally
    window.showToast = showToast;

    console.log('%cFinarrow Multi-Page Website Loaded', 'color:#F5A623;font-weight:700;font-size:14px;');

}); // ← IMPORTANT: DOMContentLoaded closing bracket

// ===== PIN Code Search Function =====
function searchPincode() {
    const pincodeInput = document.getElementById('pincodeInput');
    const pincode = pincodeInput.value.trim();

    if (pincode.length !== 6 || !/^[0-9]{6}$/.test(pincode)) {
        alert('Please enter a valid 6-digit PIN code');
        return;
    }

    alert(`Searching for lenders in PIN Code: ${pincode}\n\nOur team will contact you shortly with the best offers in your area!`);
    pincodeInput.value = '';
}

// ===== Extra styles (injected) =====
const extraStyle = document.createElement('style');
extraStyle.textContent = `
    .finarrow-toast {
        position: fixed;
        top: 90px;
        right: 20px;
        background: #ffffff;
        border-radius: 12px;
        padding: 12px 16px;
        box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1100;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.25s ease;
        font-size: 14px;
    }

    .finarrow-toast.show {
        opacity: 1;
        transform: translateY(0);
    }

    .finarrow-toast-success .toast-icon { color: #16A34A; }
    .finarrow-toast-error .toast-icon { color: #DC2626; }
    .finarrow-toast-info .toast-icon { color: #2563EB; }
    .toast-icon i { font-size: 16px; }

    .back-to-top {
        position: fixed;
        bottom: 28px;
        left: 20px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg,#F5A623,#FF8C42);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.25s ease;
        z-index: 1050;
    }

    .back-to-top.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .back-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(245,166,35,0.4);
    }

    /* Mobile Dropdown Fix - NO # IN URL */
    @media (max-width: 768px) {
        .nav-dropdown.active .dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
            position: relative !important;
            top: 0 !important;
            box-shadow: none !important;
            margin-top: 10px;
            background: var(--light-gray);
            max-height: 500px;
        }

        .dropdown-menu {
            position: static !important;
            opacity: 0;
            visibility: hidden;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .back-to-top {
            bottom: 95px;
            width: 40px;
            height: 40px;
            font-size: 14px;
        }

        .finarrow-toast {
            right: 16px;
            left: 16px;
            max-width: calc(100% - 32px);
        }
    }
`;
document.head.appendChild(extraStyle);

// ============================================
// FINARROW - COMPLETE & WORKING
// ============================================
