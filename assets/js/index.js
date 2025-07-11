/* == == == Header == == == */
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
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector(`.nav_link[href="#${sectionId}"]`);

        if (!navItem) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navItem.classList.add('active_link');
        } else {
            navItem.classList.remove('active_link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* Modal */
const languageIcon = document.getElementById('language_icon');
const modal = document.getElementById('language_modal');
const closeBtn = document.getElementById('close_modal');

languageIcon.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
