gsap.registerPlugin(ScrollTrigger);

function splitTextToLetters(element) {
    const text = element.textContent;
    element.innerHTML = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = 0;
        span.style.transform = 'translateY(32px)';
        element.appendChild(span);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('hero-title');
    if (!title) return;

    splitTextToLetters(title);

    gsap.to("#hero-title span", {
        opacity: 1,
        y: 0,
        stagger: 0.045,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#hero-title",
            start: "top 80%",
            once: true // parte solo la prima volta
        }
    });
});