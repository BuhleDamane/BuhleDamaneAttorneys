
const currentPage = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
        link.classList.add('active');
    }
});

