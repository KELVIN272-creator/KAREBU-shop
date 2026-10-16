

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 1000,
    unit: "per portion",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 2,
    name: "Sweet Bananas",
    category: "Fruits",
    price: 1500,
    unit: "per bunch",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 3,
    name: "Rice 5kg",
    category: "Grains",
    price: 7500,
    unit: "per bag",
    tag: "QUALITY",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 4,
    name: "Cooking Oil 1L",
    category: "Pantry",
    price: 3200,
    unit: "per bottle",
    tag: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 5,
    name: "Fresh Avocados",
    category: "Fruits",
    price: 2000,
    unit: "per portion",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 6,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 1200,
    unit: "per portion",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 7,
    name: "Fresh Oranges",
    category: "Fruits",
    price: 2500,
    unit: "per portion",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 8,
    name: "Dry Beans",
    category: "Grains",
    price: 3000,
    unit: "per portion",
    tag: "QUALITY",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 9,
    name: "Fresh Potatoes",
    category: "Vegetables",
    price: 1500,
    unit: "per portion",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 10,
    name: "Fresh Milk",
    category: "Dairy",
    price: 1200,
    unit: "per litre",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 11,
    name: "Farm Fresh Eggs",
    category: "Dairy",
    price: 2500,
    unit: "per tray",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 12,
    name: "White Sugar",
    category: "Pantry",
    price: 1800,
    unit: "per portion",
    tag: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 13,
    name: "Fresh Pineapple",
    category: "Fruits",
    price: 1800,
    unit: "each",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 14,
    name: "Green Peppers",
    category: "Vegetables",
    price: 1000,
    unit: "per portion",
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 15,
    name: "Fresh Bread",
    category: "Pantry",
    price: 1500,
    unit: "per loaf",
    tag: "DAILY FRESH",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 16,
    name: "Fresh Strawberries",
    category: "Fruits",
    price: 3500,
    unit: "per portion",
    tag: "SPECIAL",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=85"
  }
];

// Change this to your real WhatsApp number if necessary.
// Use country code 250, without the leading 0.
const whatsappNumber = "250783302444";

let cart = [];
let activeCategory = "All";

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");

function formatPrice(price) {
  return price.toLocaleString("en-US") + " RWF";
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  productsGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/f3f0e5/244c38?text=KAREBU+SHOP'"
        >
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <small>${product.unit}</small>
        <div class="product-bottom">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="add-button" data-add="${product.id}">
            + Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filteredProducts.length !== 0;
}

function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
}

function changeQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function renderCart() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  document.getElementById("cartCount").textContent = totalQuantity;
  document.getElementById("cartTotal").textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty. Add some products!</p>";
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-details">
          <strong>${product.name}</strong>
          <small>${formatPrice(product.price)} each</small>
          <div class="quantity-controls">
            <button data-minus="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${product.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-button" data-remove="${product.id}" aria-label="Remove product">✕</button>
      </div>
    `;
  }).join("");
}

function openCart() {
  cartOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartOverlay.hidden = true;
  document.body.style.overflow = "";
}

function checkoutOnWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add some products first.");
    return;
  }

  let message = "Hello KAREBU SHOP! I would like to place this order:\n\n";
  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const subtotal = product.price * item.quantity;

    message += `${product.name} x ${item.quantity} = ${formatPrice(subtotal)}\n`;
    total += subtotal;
  });

  message += `\nTOTAL: ${formatPrice(total)}`;
  message += "\n\nPlease confirm availability and delivery details. Thank you!";

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// Product buttons
productsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

searchInput.addEventListener("input", renderProducts);

// Category filter buttons
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderProducts();
  });
});

// Category cards
document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.filter === activeCategory
      );
    });

    renderProducts();
    document.getElementById("products").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Cart controls
document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", event => {
  if (event.target === cartOverlay) closeCart();
});

cartItems.addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

document.getElementById("checkoutButton").addEventListener(
  "click",
  checkoutOnWhatsApp
);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display products when the page opens
renderProducts();
renderCart();

const productModal = document.getElementById("productModal");
const detailQuantity = document.getElementById("detailQuantity");

let selectedProductId = null;

function openProductDetails(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  selectedProductId = product.id;

  document.getElementById("detailImage").src = product.image;
  document.getElementById("detailImage").alt = product.name;
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailCategory").textContent = product.category;
  document.getElementById("detailPrice").textContent = formatPrice(product.price);
  document.getElementById("detailUnit").textContent = product.unit;
  document.getElementById("detailQuantity").value = 1;

  document.getElementById("detailDescription").textContent =
    `${product.name} from KAREBU SHOP. Contact us to confirm availability and product details.`;

  productModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProductDetails() {
  productModal.hidden = true;
  document.body.style.overflow = "";
}

productsGrid.addEventListener("click", event => {
  const card = event.target.closest(".product-card");

  if (!card) return;

  // Do not open details when the Add to Cart button is clicked.
  if (event.target.closest("[data-add]")) return;

  const addButton = card.querySelector("[data-add]");

  if (addButton) {
    openProductDetails(Number(addButton.dataset.add));
  }
});

document.getElementById("closeProductModal").addEventListener(
  "click",
  closeProductDetails
);

productModal.addEventListener("click", event => {
  if (event.target === productModal) {
    closeProductDetails();
  }
});

document.getElementById("detailAddButton").addEventListener("click", () => {
  if (selectedProductId === null) return;

  const quantity = Number.parseInt(detailQuantity.value, 10);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 999) {
    alert("Please enter a quantity between 1 and 999.");
    return;
  }

  const existingItem = cart.find(item => item.id === selectedProductId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: selectedProductId,
      quantity: quantity
    });
  }

  renderCart();
  closeProductDetails();
  openCart();
});
