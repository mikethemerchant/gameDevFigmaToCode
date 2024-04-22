const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.outerWidth < 1100) {
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    } else {
        if (window.scrollY > 200) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});