document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    lastModifiedP.textContent = `Last Modified: ${lastModifiedDate}`;


});
