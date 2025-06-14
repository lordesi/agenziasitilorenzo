document.querySelector('.modal-close').onclick = function() {
    document.getElementById('custom-modal').classList.add('hidden');
    document.body.classList.remove('modal-open');
};