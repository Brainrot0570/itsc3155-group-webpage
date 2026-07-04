/**
 * Toggles the display of an individual team member's bio.
 * @param {string} bioId - The ID of the bio section to show or hide.
 * @param {HTMLButtonElement} buttonEl - The button that triggered the toggle.
 */
function toggleBio(bioId, buttonEl) {
    const bio = document.getElementById(bioId);
    if (!bio) {
        return;
    }

    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        if (buttonEl) {
            buttonEl.textContent = "Hide Bio";
        }
    } else {
        bio.style.display = "none";
        if (buttonEl) {
            buttonEl.textContent = "Show Bio";
        }
    }
}

/**
 * Shows the specified section and hides the other.
 * @param {string} sectionId - The ID of the section to display.
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");
    const biosBtn = document.getElementById("bios-btn");
    const visionBtn = document.getElementById("vision-btn");

    if (sectionId === "bios") {
        biosSection.style.display = "grid";
        visionSection.style.display = "none";
        if (biosBtn && visionBtn) {
            biosBtn.classList.add("active");
            visionBtn.classList.remove("active");
        }
    } else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
        if (biosBtn && visionBtn) {
            visionBtn.classList.add("active");
            biosBtn.classList.remove("active");
        }
    }
}
