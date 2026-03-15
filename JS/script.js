// Hidden Navbar to appear on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = document.body.scrollHeight * 0.1; // 10% of the page height

    if (window.scrollY > scrollThreshold) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});

// Section 1 Carousel Dynamic Animations
const carouselTrack = document.querySelector('.carousel-track');
let isPaused = false;

carouselTrack.addEventListener('mouseenter', () => {
  carouselTrack.style.animationPlayState = 'paused';
  isPaused = true;
});

carouselTrack.addEventListener('mouseleave', () => {
  carouselTrack.style.animationPlayState = 'running';
  isPaused = false;
});