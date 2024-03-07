var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Developer", "Designer", "Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDealy:100,
    loop:true
});
// Add this to your existing script.js or main.js
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('header nav');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'none' || nav.style.display === '' ? 'flex' : 'none';
});
