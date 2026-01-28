document.addEventListener('DOMContentLoaded', function () {

    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    if (!track || !prevBtn || !nextBtn || dots.length === 0) {
        console.error('Carousel elementen niet gevonden!');
        return;
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchStartX - touchEndX > 75) {
            nextSlide();
        }

        if (touchStartX - touchEndX < -75) {
            prevSlide();
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    console.log(`Carousel klaar met ${totalSlides} slides`);
});


document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });

    const navItems = document.querySelectorAll('.nav-menu li');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');

        if (dropdown) {
            link.addEventListener('click', (e) => {

                if (window.innerWidth <= 900) e.preventDefault();

                navItems.forEach(i => {
                    if (i !== item) i.classList.remove('open');
                });

                item.classList.toggle('open');
            });
        }
    });
});

//Christian:)

