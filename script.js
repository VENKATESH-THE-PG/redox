// Smooth Scrolling for Section Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Check if the target section exists before scrolling
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error('Target section not found:', this.getAttribute('href'));
        }
    });
});

// Back-to-Top Button Logic
const backToTopButton = document.getElementById("backToTop");

// Function to toggle the visibility of the back-to-top button
function toggleBackToTop() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Check if the button exists and add event listeners
if (backToTopButton) {
    // Show/hide the button on scroll
    window.addEventListener("scroll", toggleBackToTop);

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
} else {
    console.error("Back to Top button not found!");
}

// Initial call to hide the button if page is loaded at the top
toggleBackToTop();
