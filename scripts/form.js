document.addEventListener('DOMContentLoaded', () => {
    const productArray = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
        { id: 'product3', name: 'Product 3' },
        { id: 'product4', name: 'Product 4' },
        { id: 'product5', name: 'Product 5' },
    ];

    const productSelect = document.getElementById('product-name');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Review counter
    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', 0);
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        let reviewCount = parseInt(localStorage.getItem('reviewCount'));
        localStorage.setItem('reviewCount', reviewCount + 1);
    });
});
