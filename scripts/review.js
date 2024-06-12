document.addEventListener('DOMContentLoaded', () => {
    const reviewCount = localStorage.getItem('reviewCount');
    document.getElementById('review-count').textContent = reviewCount;
});