document.addEventListener("DOMContentLoaded", function() {
    const promoContent = document.querySelector('.promo-content');
    let pos = 0;

    function animate() {
        pos -= 0.4; // velocità dello scorrimento
        if (-pos >= promoContent.scrollWidth / 2) {
            pos = 0;
        }
        promoContent.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(animate);
    }

    // Duplica il contenuto per effetto loop infinito
    promoContent.innerHTML += promoContent.innerHTML;
    animate();
});