document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;
});
