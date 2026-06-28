// Mark JS as available so reveal styles apply (content stays visible if JS fails)
document.documentElement.classList.add('js');

// Scroll-triggered reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Subtle shadow on the top bar once the page is scrolled
const topbar = document.getElementById('topbar');
function updateTopbar(){
  if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 4);
}
window.addEventListener('scroll', updateTopbar, { passive: true });
updateTopbar();
