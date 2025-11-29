// JS for index.html
// Typing effect for hero section
window.addEventListener('DOMContentLoaded', function() {
  const typedTextElement = document.querySelector('.typed-text');
  if (!typedTextElement) return;
  const textArray = [
    'GIS Analyst',
    'Web Developer',
    'Network Administrator',
    'Desktop App Developer',
    'Problem Solver',
    'Innovation Driver'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  function typeText() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
      typedTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      typeSpeed = 500;
    }
    setTimeout(typeText, typeSpeed);
  }
  typeText();
});
// Download resume function (placeholder)
function downloadResume() {
  alert('Resume download would be implemented here. Please contact me directly for my latest resume.');
}
// Smooth navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(31, 41, 55, 0.98)';
  } else {
    navbar.style.background = 'rgba(31, 41, 55, 0.95)';
  }
});
