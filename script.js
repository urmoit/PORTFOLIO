// Function to set the language
function setLanguage(language) {
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', language);

    // Get all elements with data-lang attributes
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        // Update text content based on the selected language
        if (language === 'en') {
            element.textContent = element.getAttribute('data-lang-en');
        } else if (language === 'et') {
            element.textContent = element.getAttribute('data-lang-et');
        }
    });
}

// Slideshow JavaScript
let slideIndex = 1;
showSlides(slideIndex);

// Function to show the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Ensure the slideIndex is within the range of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}

// Function to handle slide navigation
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Event listeners for arrow navigation
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Check for saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);

    // Initialize the slideshow
    showSlides(slideIndex);
});
