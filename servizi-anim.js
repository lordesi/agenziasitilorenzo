document.addEventListener("DOMContentLoaded", () => {
    // Assicurati che GSAP e ScrollTrigger siano disponibili
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("GSAP o ScrollTrigger non sono stati caricati.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Seleziona tutti gli elementi <li> diretti della lista dei servizi
    const services = gsap.utils.toArray('#servizi .wrapper_text > ul > li');
    
    // Non è necessario impostare lo stato iniziale qui con gsap.set() 
    // perché lo stato iniziale è già definito nel file style.css (opacity: 0, transform: translateY(40px))
    // Questo previene anche un "flash" del contenuto non animato.

    // Crea l'animazione con una configurazione di ScrollTrigger più avanzata
    gsap.to(services, {
        opacity: 1,
        y: 0,
        // 'stagger' è fondamentale per animare gli elementi in sequenza mentre si scorre
        stagger: 0.5, // Aumenta il ritardo tra gli elementi per un effetto più graduale
        ease: "none", // Un'interpolazione lineare è spesso la migliore per le animazioni con scrub
        scrollTrigger: {
            trigger: "#servizi .wrapper_text ul", // L'elemento che attiva l'animazione
            start: "top 80%", // Inizia quando l'80% superiore del trigger entra nel viewport
            end: "bottom 60%", // Aumenta lo spazio di scroll necessario per completare l'animazione
            
            // SCRUB: La chiave per la sincronizzazione con lo scroll.
            // Un valore numerico (es. 1.5) crea un effetto "morbido" di inseguimento,
            // rendendo l'animazione fluida e meno brusca rispetto a 'true'.
            scrub: 1.5,
            
            // Decommenta la riga seguente durante lo sviluppo per vedere visivamente 
            // i punti di inizio e fine dello ScrollTrigger.
            // markers: true, 
        }
    });
});