function closeNav() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
}

document.addEventListener('click', function(e) {
  const navbar = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');
  
  if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
    const bsCollapse = new bootstrap.Collapse(navbar, {toggle: false});
    bsCollapse.hide();
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeNav();
        });
    });
});