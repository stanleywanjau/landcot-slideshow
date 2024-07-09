document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slideshow.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds

    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
