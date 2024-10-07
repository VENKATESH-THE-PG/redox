// Smooth Scrolling for all section links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ensure the section starts at the top of the screen
            });
        }
    });
});

// Back to Top Button Visibility Logic
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Show the button after scrolling down 200px
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Back to Top Smooth Scroll
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
