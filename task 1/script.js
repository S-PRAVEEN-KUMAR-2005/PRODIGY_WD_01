// JavaScript for Interactive Navigation Menu
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // Change navbar style on scroll
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// Highlight active menu item on hover
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#d2b48c'; // Light Tan
    item.style.color = '#6f4e37'; // Coffee Brown
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'transparent';
    item.style.color = '#fff';
  });
});
