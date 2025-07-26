/* == == == Header == == == */
// Scroll sections active link (Keep your existing ScrollTrigger code)
window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("section").forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleClass: {
                targets: document.querySelector(`a[href="#${section.id}"]`),
                className: "active"
            },
        });
    });

    // --- Header Show/Hide on Scroll ---
    const header = document.getElementById('header');

    ScrollTrigger.create({
        start: "top top", // When the top of the viewport hits the top of the page
        end: 99999, // A large number to ensure it always checks for scroll direction
        onUpdate: (self) => {
            if (self.direction === -1) { // Scrolling up
                header.classList.remove('hide_header');
                
            } else { // Scrolling down
                header.classList.add('hide_header');
            }
        },
    });
});

const headerToggle = document.getElementById('header_toggle'),
    nav = document.getElementById('nav'),
    navClose = document.getElementById('nav_close');

// Toggle menu show/hide
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        nav.classList.toggle('show_menu');
    });
}

// Menu hidden on close button
if (navClose) {
    navClose.addEventListener('click', () => {
        nav.classList.remove('show_menu');
    });
}

// Remove menu on link click
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    nav.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Close menu on click outside
document.addEventListener('click', function(e) {
    if (nav.classList.contains('show_menu')) {
        if (!nav.contains(e.target) && !headerToggle.contains(e.target)) {
            nav.classList.remove('show_menu');
        }
    }
});

// Scroll sections active link
window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("section").forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleClass: {
                targets: document.querySelector(`a[href="#${section.id}"]`),
                className: "active"
            },
        });

    });
});

/* Modal */
const languageIcon = document.getElementById('language_icon');
const modal = document.getElementById('language_modal');
const closeBtn = document.getElementById('close_modal');

languageIcon.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
