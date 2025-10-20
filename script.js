// ------------------------
// Falling letters on scroll
// ------------------------
const fallingTitle = document.querySelector('.falling-title');
window.addEventListener('scroll', () => {
  if (fallingTitle) {
    const scrollY = window.scrollY;
    fallingTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
    fallingTitle.style.opacity = 1 - scrollY / 600;
  }
});

// ------------------------
// Custom cursor
// ------------------------
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// ------------------------
// Top-left name jitter effect
// ------------------------
const nameEl = document.querySelector('.top-left.name');
if(nameEl){
  const fonts = ['sans-serif','serif','monospace','cursive']; // placeholder
