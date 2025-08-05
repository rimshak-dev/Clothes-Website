const products = [
  { name: "Men's Summer Shirt", price: 2200, category: "summer", gender: "men", image: "men1.jpeg" },
  { name: "Men's Polo Tee", price: 1800, category: "summer", gender: "men", image: "men2.jpeg" },
  { name: "Men's Kurta", price: 2500, category: "summer", gender: "men", image: "men3.jpeg" },
  { name: "Men's Shorts", price: 1200, category: "summer", gender: "men", image: "men4.jpeg" },

  { name: "Women's Summer Dress", price: 2800, category: "summer", gender: "women", image: "women1.jpeg" },
  { name: "Women's Light Top", price: 1900, category: "summer", gender: "women", image: "women2.jpeg" },
  { name: "Women's Skirt", price: 1600, category: "summer", gender: "women", image: "women3.jpeg" },
  { name: "Women's Kurti", price: 2200, category: "summer", gender: "women", image: "women4.jpeg" },

  { name: "Men's Winter Jacket", price: 3500, category: "winter", gender: "men", image: "men-winter1.jpeg" },
  { name: "Men's Sweater", price: 2700, category: "winter", gender: "men", image: "men-winter1.jpeg" },

  { name: "Women's Winter Coat", price: 4000, category: "winter", gender: "women", image: "women-winter1.jpeg" },
  { name: "Women's Wool Shawl", price: 3000, category: "winter", gender: "women", image: "women-winter1.jpeg" },
];

let selectedProduct = null;

function renderProducts(filter = {}) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  const filtered = products.filter(p => {
    return (!filter.category || p.category === filter.category) &&
           (!filter.gender || p.gender === filter.gender);
  });

  filtered.forEach(p => {
    const card = `
      <div class="col-md-3 product-card" data-category="${p.category}" data-gender="${p.gender}">
        <div class="card h-100 shadow">
          <img src="${p.image}" class="card-img-top" alt="${p.name}" />
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">PKR ${p.price}</p>
            <button class="btn btn-primary w-100" onclick="openModal('${p.name}', ${p.price}, '${p.image}')">View Details</button>
          </div>
        </div>
      </div>
    `;
    list.innerHTML += card;
  });
}

function openModal(name, price, image) {
  selectedProduct = name;
  document.getElementById("productTitle").innerText = name;
  document.getElementById("productPrice").innerText = "Price: PKR " + price;
  document.getElementById("productImage").src = image;
  new bootstrap.Modal(document.getElementById("productModal")).show();
}

function addToCart() {
  alert(`${selectedProduct} added to cart!`);
}

function filterProducts(category) {
  renderProducts({ category });
}

function filterGender(gender) {
  renderProducts({ gender });
}

document.addEventListener("DOMContentLoaded", () => renderProducts());

