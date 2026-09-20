let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert(name + " yashyizwe muri Cart 🛒");
}


function updateCartCount() {

    document.getElementById("cart-count").textContent =
        cart.length;
}


function showCart() {

    const modal = document.getElementById("cart-modal");

    modal.style.display = "flex";

    displayCart();
}


function closeCart() {

    document.getElementById("cart-modal").style.display =
        "none";
}


function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Cart yawe iracyari empty.</p>";

        cartTotal.textContent = "0 Fr";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach(function(item) {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <strong>${item.price.toLocaleString()} Fr</strong>
        `;

        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        total.toLocaleString() + " Fr";
}


function filterProducts(category) {

    const products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}
