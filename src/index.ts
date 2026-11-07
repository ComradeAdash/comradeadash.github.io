import { observer } from "./utils/animations.js";
import * as carousel from "./utils/carousel.js";

let slideIndex = 1
const hiddenElements = document.querySelectorAll<HTMLElement>(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
carousel.showSlides(slideIndex);