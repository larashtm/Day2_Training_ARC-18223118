// Menunggu halaman sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
});

function fetchProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.products);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Bersihin produk lama

    // Menampilkan 10 produk pertama
    for (let i = 0; i < 10; i++) {
        const product = products[i];

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Pastikan pakai gambar dari array images[], kalau ada
        const productImage = product.images && product.images.length > 0 
            ? product.images[0] 
            : product.thumbnail; 

        productCard.innerHTML = `
            <img src="${productImage}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">Harga: $${product.price}</p>
            <p class="rating">Rating: ${product.rating}</p>
        `;

        productList.appendChild(productCard);
    }
}
