// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section by its href
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Only scroll if the target section exists
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ensure the section starts at the top of the screen
            });
        } else {
            console.error(`No section found for ${this.getAttribute('href')}`);
        }
    });
});

// Back to Top Button Visibility Logic
const backToTopButton = document.getElementById("backToTop");

// Only add the scroll event listener if the button exists
if (backToTopButton) {
    window.addEventListener("scroll", function() {
        // Show the button after scrolling down 200px
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Back to Top Smooth Scroll
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
} else {
    console.error("Back to Top button not found!");
}
