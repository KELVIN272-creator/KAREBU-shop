let cart = [];

function addToCart(name, price) {

    const existingProduct = cart.find(
        item => item.name === name
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCartCount();

    alert(name + " yashyizwe muri Cart 🛒");
}


function updateCartCount() {

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.getElementById("cart-count").textContent = count;
}


function showCart() {

    document.getElementById("cart-modal").style.display = "flex";

    displayCart();
}


function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}


function increaseQuantity(index) {

    cart[index].quantity++;

    updateCartCount();

    displayCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCartCount();

    displayCart();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();
}


function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Cart yawe iracyari empty 🛒</p>";

        cartTotal.textContent = "0 Fr";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                <small>
                    ${item.price.toLocaleString()} Fr ×
                    ${item.quantity}
                </small>
            </div>

            <div class="cart-controls">

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

                <button
                    onclick="removeFromCart(${index})"
                    class="remove-button">
                    🗑️
                </button>

            </div>
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


function orderWhatsApp() {

    if (cart.length === 0) {

        alert("Cart yawe iracyari empty.");

        return;
    }


    let message = "Muraho KAREBU Shop!%0A%0A";

    message += "Ndashaka gutumiza:%0A";


    let total = 0;


    cart.forEach(function(item) {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            `- ${item.name} x${item.quantity}: ${subtotal.toLocaleString()} Fr%0A`;

    });


    message +=
        `%0ATotal: ${total.toLocaleString()} Fr`;


    // SHYIRAMO NUMBER YA WHATSAPP YA KAREBU SHOP HANO
    const phone = "2507XXXXXXXX";


    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );
}
