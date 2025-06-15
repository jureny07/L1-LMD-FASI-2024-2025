const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });