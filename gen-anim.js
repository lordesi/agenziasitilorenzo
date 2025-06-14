document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // rimuove dopo la prima animazione
        }
      });
    },
    {
      threshold: 0.1 // l'elemento deve essere visibile al 10%
    }
  );

  reveals.forEach(el => observer.observe(el));
});