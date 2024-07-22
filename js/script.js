let currentSlide = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    track.style.transform = 'translateX(-' + (slideWidth * currentSlide) + 'px)';
}
