// main.js
// Add interactivity or dynamic content here

document.addEventListener('DOMContentLoaded', () => {
  // Animate header h1 once on page load
  const h1 = document.querySelector('header h1');
  h1.classList.add('animated');
  setTimeout(() => h1.classList.remove('animated'), 1200);

  // Example: Show an alert when the About section is clicked
  document.getElementById('about').addEventListener('click', () => {
    alert('Thanks for your interest in Monashy!');
  });
});
