import products from './database_mock.js';

let cart = [];

function showModal(product) {
  const modal = document.querySelector(".container-product-modal");

  modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img class="modal-image" src="${product.imageUrl}" alt="${product.name}" />
        <div class="container-modal">
          <div class="container-info-product">
            <span class="name-product-modal">${product.name}</span>
            <span class="price-product-modal">R$ ${product.price}</span>
          </div>
          <div class="container-description">
            <span class="description-product">${product.description}</span>
          </div>
          <button class="buy-button-modal">Comprar</button>
        </div>
      </div>
    `;
  modal.style.display = "flex";

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });

  const buyButton = modal.querySelector(".buy-button-modal");
  buyButton.addEventListener("click", (e) => {
    addToCart(product);
    updateCartDisplay();
    updateCartCounter(); 
    modal.style.display = "none"; 
  });
}


function addToCart(product) {
  const price = parseFloat(product.price);

  const existingProduct = cart.find(item => item.id === product.id);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.totalPrice += price;
  } else {
    cart.push({ ...product, quantity: 1, totalPrice: price });
  }
  console.log(existingProduct)
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex(item => item.id === productId);
  
  if (productIndex > -1) {
    const product = cart[productIndex];
    
    if (product.quantity > 1) {
      product.quantity -= 1;
      product.totalPrice -= parseFloat(product.price);
    } else {
      cart.splice(productIndex, 1);
    }
  }
  updateCartDisplay();
  updateCartCounter(); 
}

function updateCartDisplay() {
  const cartTotalElement = document.querySelector(".cart-total");
  const cartItemsContainer = document.querySelector(".cart-items");

  let total = 0;
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    total += item.totalPrice;
    
    const cartItemElement = document.createElement("li");
    cartItemElement.classList.add("cart-item");
    cartItemElement.innerHTML = `
       <img
        class="image-product-cart"
        src="${item.imageUrl}"
        alt="${item.altText}"
      />
      <div class="info-product-cart">
        <span class="name-item-cart">${item.name}</span>
        <span class="price-item-cart">- R$ ${item.totalPrice.toFixed(2)}</span>
      </div>
      <span class="quantity">(x${item.quantity})</span>
      <button class="remove-item-button" data-id="${item.id}">Remover</button>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

  const removeButtons = document.querySelectorAll(".remove-item-button");
  removeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });
}

function updateCartCounter() {
  const cartCounter = document.querySelector(".cart-counter");
  if (cartCounter) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalItems;
  } else {
    console.warn("Elemento .cart-counter não encontrado.");
  }
}

function showCartModal() {
  const cartModal = document.querySelector(".cart-modal");

  cartModal.innerHTML = `
    <div class="cart-modal-content">
      <span class="close"></span>
      <h2 class="title-cart">Carrinho de Compras</h2>
      <ul class="cart-items"></ul>
      <div class="info-cart">
        <div class="cart-total"></div>
        <button class="close-cart-button">&times</button>
      </div>
    </div>
  `;

  cartModal.style.display = "flex";

  const closeButton = cartModal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  const closeCartButton = cartModal.querySelector(".close-cart-button");
  closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function handleEsc(event) {
    if (event.key === "Escape") {
      cartModal.style.display = "none";
      document.removeEventListener("keydown", handleEsc);
    }
  });

  updateCartDisplay();
}

const cartButton = document.querySelector(".shopping_cart");
if (cartButton) {
  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    showCartModal();
  });
} else {
  console.warn("Botão de carrinho não encontrado.");
}

const cardsProducts = () => {
  const ulElement = document.querySelector('.list-products');
  const shuffledProducts = products.sort(() => Math.random() - 0.5).slice(0, 10);

  ulElement.innerHTML = '';

  shuffledProducts.forEach(product => {
    const liElement = document.createElement('li');
    liElement.classList.add('products-cards');
    liElement.innerHTML = `
      <img
        class="image-product"
        src="${product.imageUrl}"
        alt="${product.altText}"
      />
      <div class="container-description">
        <h4 class="name-product">${product.name}</h4>
        <span class="price-product">R$ ${parseFloat(product.price).toFixed(2)}</span>
      </div>
      <button class="buy-button-modal">Comprar</button>
    `;

    liElement.addEventListener('click', () => {
      showModal(product);
    });

    ulElement.appendChild(liElement);
  });
};

cardsProducts();