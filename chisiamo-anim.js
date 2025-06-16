document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animazione Titoli Hero (INVARIATA)
    gsap.to(".chisiamo-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.5
    });

    // 2. NUOVA Animazione per la Sezione Approccio
    gsap.utils.toArray('.approccio-row').forEach((row, i) => {
        const image = row.querySelector('.approccio-img');
        const text = row.querySelector('.approccio-text');

        // Determina la direzione in base all'ordine nel DOM (se la riga è pari o dispari)
        // La riga 1 (indice 0) ha l'immagine a sinistra, la riga 2 (indice 1) a destra.
        const imageFromLeft = row.querySelector('.approccio-img').nextElementSibling === row.querySelector('.approccio-text');

        // Imposta lo stato iniziale degli elementi (fuori dallo schermo)
        gsap.set(image, { xPercent: imageFromLeft ? -100 : 100, opacity: 0 });
        gsap.set(text, { xPercent: imageFromLeft ? 100 : -100, opacity: 0 });

        // Crea una timeline per animare immagine e testo insieme
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
            }
        });

        tl.to(image, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }).to(text, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8'); // Il testo parte 0.8s prima della fine dell'animazione dell'immagine
    });
});