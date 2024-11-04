let currentSlide = 0;
const wat = document.querySelector('.wat');
const buttons = document.querySelectorAll('.navigation button');

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    wat.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update navigation buttons
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === currentSlide);
    });
}

// Auto play functionality
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % 2;
        goToSlide(currentSlide);
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto play initially
startAutoPlay();

// Stop auto play on hover
document.querySelector('.templeall').addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.templeall').addEventListener('mouseleave', startAutoPlay);