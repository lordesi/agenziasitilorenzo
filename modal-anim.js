document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById('custom-modal');
  const content = modal.querySelector('.modal-content');

  // Mostra la modale con animazione
  function showModal() {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    gsap.fromTo(content,
      { y: 100, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power4.out" }
    );
  }

  // Nasconde la modale con animazione
  function hideModal() {
    gsap.to(content, {
      y: 100,
      opacity: 0,
      scale: 0.98,
      duration: 0.4,
      ease: "power4.in",
      onComplete: () => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }
    });
  }

  // Collega i pulsanti
  document.querySelectorAll('[onclick*="custom-modal"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showModal();
    });
  });

  // Chiudi con il bottone
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
  }

  // Chiudi cliccando fuori dalla modale
  modal.addEventListener('click', function(e) {
    if (e.target === modal) hideModal();
  });
});