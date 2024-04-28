const nav = document.querySelector('nav');
const mobileNav = document.querySelector('nav.mobile-nav');

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

window.addEventListener('scroll', () => {
    if (window.outerWidth < 1100) {
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
            mobileNav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            mobileNav.classList.remove('scrolled');
        }
    } else {
        if (window.scrollY > 200) {
            nav.classList.add('scrolled');
            mobileNav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            mobileNav.classList.remove('scrolled');
        }
    }
});

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});