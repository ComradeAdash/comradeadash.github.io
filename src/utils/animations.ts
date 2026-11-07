// This callback function observves multiple elements at the same time
// It checks if the element is intersecting with the viewport (visible within the page)
export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // viewing page
        if (entry.isIntersecting) {
            // entry.target is the HTML element being reported
            entry.target.classList.add("show");

            // reset, so when you scroll back we get animation again
        } else {
            entry.target.classList.remove("show");
        }
    });
});