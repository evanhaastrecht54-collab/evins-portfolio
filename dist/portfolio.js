"use strict";
const scrollSpeed = 0.5;
const wheels = document.querySelectorAll(".wheel");
window.addEventListener("scroll", () => {
    const rotation = window.scrollY * scrollSpeed;
    for (let i = 0; i < wheels.length; i++) {
        const wheel = wheels[i];
        if (wheel) {
            wheel.style.transform = `rotate(${rotation}deg)`;
        }
    }
});
//# sourceMappingURL=portfolio.js.map