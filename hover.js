document.addEventListener("DOMContentLoaded", () => {
    const col1_4Elements = document.querySelectorAll(".col-1-4");

    col1_4Elements.forEach((col1_4) => {
        const gridContainer = col1_4.closest(".grid-container"); // Trova il genitore .grid-container

        col1_4.addEventListener("mouseenter", () => {
            if (gridContainer.classList.contains("inverso")) {
                gridContainer.style.gridTemplateColumns = "3fr 1fr"; // Layout per .inverso
            } else {
                gridContainer.style.gridTemplateColumns = "1fr 3fr"; // Layout normale
            }
        });

        col1_4.addEventListener("mouseleave", () => {
            if (gridContainer.classList.contains("inverso")) {
                gridContainer.style.gridTemplateColumns = "1fr 3fr"; // Ripristina layout per .inverso
            } else {
                gridContainer.style.gridTemplateColumns = "3fr 1fr"; // Ripristina layout normale
            }
        });
    });
});