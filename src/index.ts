// console.log("test");

// This callback function observves multiple elements at the same time
// It checks if the element is intersecting with the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // allows us to show the animation multiple times when the element is scrolled out of view and back in
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));