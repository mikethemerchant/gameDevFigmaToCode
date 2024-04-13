const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});