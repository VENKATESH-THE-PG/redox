// Smooth Scrolling for Section Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back-to-Top Button Logic
const backToTopButton = document.getElementById("backToTop");

function toggleBackToTop() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Show/hide back-to-top button based on scroll position
window.addEventListener("scroll", toggleBackToTop);

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sticky Navbar Color Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#111';  // Darken the navbar when scrolling
    } else {
        navbar.style.backgroundColor = '#333';  // Reset to default when at the top
    }
});
