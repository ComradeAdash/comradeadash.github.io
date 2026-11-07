let slideIndex = 1

export function showSlides(n: number): void{
    const slides = document.querySelectorAll<HTMLElement>(".mySlides");
    const dots = document.querySelectorAll<HTMLElement>(".dot");

    if (slides.length === 0){
        return;
    }

    // Wrap around when moving past either end
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1]?.classList.add("active");
}

// Next / previous controls
export function plusSlides(n: number): void {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
export function currentSlide(n: number): void {
    showSlides(n);
}