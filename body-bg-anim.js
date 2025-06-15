gsap.registerPlugin(ScrollTrigger);

const originalBg = window.getComputedStyle(document.body).backgroundColor;
const purple = "#b488f1";
const white = "#ffffff";
const tertiary = getComputedStyle(document.documentElement).getPropertyValue('--theme-tertiary').trim();

// Primo cambio colore (prima section)
ScrollTrigger.create({
  trigger: "section",
  start: "top 80%",
  onEnter: () => {
    gsap.to("body", {
      backgroundColor: purple,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  onLeaveBack: () => {
    gsap.to("body", {
      backgroundColor: originalBg,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  once: false
});

// Cambio colore per la sezione servizi
ScrollTrigger.create({
  trigger: "#servizi",
  start: "top 80%",
  onEnter: () => {
    gsap.to("body", {
      backgroundColor: tertiary,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  onLeaveBack: () => {
    gsap.to("body", {
      backgroundColor: purple,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  once: false
});

ScrollTrigger.create({
  trigger: "#footer",
  start: "top 70%",
  onEnter: () => {
    gsap.to("body", {
      backgroundColor: white,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  onLeaveBack: () => {
    gsap.to("body", {
      backgroundColor: tertiary,
      duration: 1.2,
      ease: "power2.out"
    });
  },
  once: false
});