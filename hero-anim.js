gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "+=250vh",
  pin: true,
  onUpdate: (self) => {
    const progress = self.progress;

    gsap.to("#hero-video", {
      scale: 1 + progress * 0.15,
      borderRadius: `${1.5 - progress * 1.5}rem`,
      boxShadow: `0 8px ${32 - progress * 32}px rgba(0, 0, 0, ${0.12 - progress * 0.12})`,
      ease: "power1.out",
      overwrite: true,
      duration: 0.2
    });
  }
});