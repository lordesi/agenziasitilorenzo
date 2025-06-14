document.addEventListener("DOMContentLoaded", function() {
    const words = ["unico", "innovativo", "coinvolgente", "efficace"];
    const el = document.querySelector('.switch-word');
    let idx = 0;

    function showWord(word) {
        el.textContent = word;
        el.classList.remove('exit');
        el.classList.add('visible');
    }

    function nextWord() {
        // Fai uscire la parola verso il basso
        el.classList.remove('visible');
        el.classList.add('exit');
        setTimeout(() => {
            idx = (idx + 1) % words.length;
            // Prepara la nuova parola sopra e la mostra
            el.classList.remove('exit');
            el.style.opacity = '0';
            el.style.transform = 'translateY(-40px)';
            el.textContent = words[idx];
            setTimeout(() => {
                el.classList.add('visible');
                el.style.opacity = '';
                el.style.transform = '';
            }, 20); // piccolo delay per triggerare la transizione
        }, 500); // deve combaciare con la durata del transition in CSS
    }

    setInterval(nextWord, 2500);
});