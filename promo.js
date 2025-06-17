document.addEventListener("DOMContentLoaded", function() {
    const promoContent = document.querySelector('.promo-content');
    if (!promoContent) return;

    // Evita duplicazioni multiple
    if (!promoContent.dataset.duplicated) {
        promoContent.innerHTML += promoContent.innerHTML;
        promoContent.dataset.duplicated = "true";
    }

    // Calcola la larghezza del contenuto originale
    const singleBlockWidth = promoContent.scrollWidth / 2;
    let pos = 0;

    function animate() {
        pos -= 0.4;
        if (pos <= -singleBlockWidth) {
            pos += singleBlockWidth;
        }
        promoContent.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});