document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});
