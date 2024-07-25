document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide')) - 1;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});






document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const language = document.getElementById('language');

    languageSwitcher.addEventListener('click', () => {
        if (language.textContent === 'RU/EN') {
            language.textContent = 'EN/RU';
        } else {
            language.textContent = 'RU/EN';
        }
    });
});









