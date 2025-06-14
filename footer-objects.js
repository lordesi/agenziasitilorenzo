document.addEventListener("DOMContentLoaded", function() {
    const gravity = 1.1;
    const bounce = 0.45;
    const objects = document.querySelectorAll('.falling-object');
    const box = document.querySelector('.footer-dropbox');

    objects.forEach(obj => {
        let y = 0, vy = 0, dragging = false, offsetX = 0, offsetY = 0, x = parseInt(obj.style.left);

        function fall() {
            if (!dragging) {
                vy += gravity;
                y += vy;
                if (y > box.offsetHeight - obj.offsetHeight) {
                    y = box.offsetHeight - obj.offsetHeight;
                    vy *= -bounce;
                    if (Math.abs(vy) < 1.5) vy = 0;
                }
                obj.style.top = y + "px";
            }
            requestAnimationFrame(fall);
        }

        obj.addEventListener('mousedown', function(e) {
            dragging = true;
            obj.classList.add('dragging');
            offsetX = e.clientX - obj.getBoundingClientRect().left;
            offsetY = e.clientY - obj.getBoundingClientRect().top;
            document.body.style.userSelect = "none";
        });

        document.addEventListener('mousemove', function(e) {
            if (dragging) {
                const boxRect = box.getBoundingClientRect();
                x = e.clientX - boxRect.left - offsetX;
                y = e.clientY - boxRect.top - offsetY;
                x = Math.max(0, Math.min(box.offsetWidth - obj.offsetWidth, x));
                y = Math.max(0, Math.min(box.offsetHeight - obj.offsetHeight, y));
                obj.style.left = x + "px";
                obj.style.top = y + "px";
                vy = 0;

                // Collision detection
                objects.forEach(other => {
                    if (other !== obj) {
                        const ox = parseFloat(other.style.left) || 0;
                        const oy = parseFloat(other.style.top) || 0;
                        const ow = other.offsetWidth;
                        const oh = other.offsetHeight;
                        const nx = x;
                        const ny = y;
                        const nw = obj.offsetWidth;
                        const nh = obj.offsetHeight;

                        // Check overlap
                        if (
                            nx < ox + ow &&
                            nx + nw > ox &&
                            ny < oy + oh &&
                            ny + nh > oy
                        ) {
                            // Simple push: sposta l'altro oggetto nella direzione del drag
                            const dx = nx + nw / 2 - (ox + ow / 2);
                            const dy = ny + nh / 2 - (oy + oh / 2);
                            const pushDist = 30; // quanto spostare

                            let newOx = ox + (dx > 0 ? pushDist : -pushDist);
                            let newOy = oy + (dy > 0 ? pushDist : -pushDist);

                            // Limiti box
                            newOx = Math.max(0, Math.min(box.offsetWidth - ow, newOx));
                            newOy = Math.max(0, Math.min(box.offsetHeight - oh, newOy));

                            other.style.left = newOx + "px";
                            other.style.top = newOy + "px";
                        }
                    }
                });
            }
        });

        document.addEventListener('mouseup', function() {
            if (dragging) {
                dragging = false;
                obj.classList.remove('dragging');
                document.body.style.userSelect = "";
            }
        });

        fall();
    });
});