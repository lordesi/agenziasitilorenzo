document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const carouselContainer = document.querySelector('.carousel-container');
    const carouselWrapper = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    const updateScroll = () => {
        const wrapperWidth = carouselWrapper.offsetWidth;

        // Prendi l'ultimo item
        const lastItem = items[items.length - 1];

        // Posizione sinistra dell'ultimo item relativa al container
        const lastItemOffsetLeft = lastItem.offsetLeft;

        // Larghezza ultimo item (include i margini se vuoi, altrimenti no)
        const lastItemWidth = lastItem.offsetWidth;

        // Distanza da scrollare = (offsetLeft ultimo item + sua larghezza) - larghezza wrapper
        // Questo valore dice quanto devo spostare container a sinistra per far combaciare il bordo destro dell'ultimo item col bordo destro del wrapper
        const scrollDistance = lastItemOffsetLeft + lastItemWidth - wrapperWidth;

        gsap.to(carouselContainer, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: carouselWrapper,
                start: "center center",
                end: `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
    };

    updateScroll();

    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
});

