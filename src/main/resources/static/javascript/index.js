function toggleDarkMode() {
	document.body.classList.toggle('dark-mode');
}

let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideCount = slides.children.length;

setInterval(() => {
	currentSlide = (currentSlide + 1) % slideCount;
	slides.style.transform = `translateX(-${currentSlide * 100}%)`;
	slides.style.transition = 'transform 1.5s ease';
}, 6000);

const style = document.createElement('style');
style.media = 'print';
style.innerHTML = `
    .dark-toggle, input[type="search"], .slider, nav { display: none !important; }
    body { background: white !important; color: black !important; }
    a { color: black !important; text-decoration: none !important; }
    .post { page-break-inside: avoid; }`;
document.head.appendChild(style);

const fadeEls = document.querySelectorAll('.post, .profile-info, section.content');
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, { threshold: 0.1 });

fadeEls.forEach(el => {
	el.classList.add('fade-in');
	observer.observe(el);
});
function toggleMobileMenu() {
	const nav = document.getElementById('mobileNav');
	nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
document.getElementById("last-updated").textContent = `최종 업데이트: ${new Date().toLocaleDateString('ko-KR')}`;

const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
	const currentScroll = window.scrollY;
	if (currentScroll > 50) {
		header.style.padding = '10px 20px';
		header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
	} else {
		header.style.padding = '20px';
		header.style.boxShadow = 'none';
	}
	lastScrollY = currentScroll;
});