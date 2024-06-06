document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});

function toggleMenu() {
    var nav = document.getElementById("myTopnav");
    nav.classList.toggle("show");
}
