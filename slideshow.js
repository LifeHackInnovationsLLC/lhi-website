const slideshowContainer = document.querySelector('.slideshow-container');
const slides = Array.from(slideshowContainer.children);
let offset = 0;
const speed = 4; // Adjust this value to change the speed of the slideshow

// Clone the slides and append them to the end of the slideshow
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slideshowContainer.appendChild(clone);
});

function slideShow() {
    offset -= speed;
    slideshowContainer.style.transform = `translateX(${offset}px)`;

    // When the slideshow reaches the end, reset its position
    if (offset <= -slideshowContainer.scrollWidth / 2) {
        offset = 0;
    }

    // Request the next frame
    requestAnimationFrame(slideShow);
}

// Start the slideshow
requestAnimationFrame(slideShow);