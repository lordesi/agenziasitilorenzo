document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const container = document.querySelector('.info-texts');
    const wrapper = document.querySelector('.info-wrapper');
  
    // Calcolo dello scroll necessario
    const getScrollDistance = () => {
      return container.scrollHeight - wrapper.clientHeight;
    };
  
    gsap.to(container, {
      y: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
  
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });
  });