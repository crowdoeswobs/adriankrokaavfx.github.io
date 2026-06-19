// Scroll-triggered reveal
const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => io.observe(el));

// Progress rail fill
const railFill = document.getElementById('railFill');
function updateRail(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (railFill) railFill.style.height = pct + '%';
}
window.addEventListener('scroll', updateRail, { passive: true });
updateRail();

// Scroll cue click
const scrollCue = document.getElementById('scrollCue');
if (scrollCue){
  scrollCue.addEventListener('click', () => {
    document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
  });
}
