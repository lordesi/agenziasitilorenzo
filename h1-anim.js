document.addEventListener("DOMContentLoaded", () => {
    // Assicurati che GSAP sia stato caricato
    if (typeof gsap === "undefined") {
        console.error("GSAP non è stato caricato.");
        return;
    }

    // Applica l'animazione a tutti gli elementi con la classe .hero-title
    gsap.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        
        // La proprietà 'stagger' crea l'animazione sequenziale
        stagger: 0.2, // Applica un ritardo di 0.2 secondi tra l'inizio dell'animazione di ogni h1
        
        delay: 0.5
    });
});