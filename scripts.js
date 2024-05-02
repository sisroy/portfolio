document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-fade-in");

    animatedElements.forEach((element) => {
        element.style.animationDelay = "1s"; // Add delay to give a slow-motion effect
    });
});


