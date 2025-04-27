// Select elements
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('#navbar ul');

// Toggle the navbar menu on hamburger click
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close the menu when a link is clicked (optional)
navbarMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navbarMenu.classList.remove('active');
    hamburger.classList.remove('open');
  }
});