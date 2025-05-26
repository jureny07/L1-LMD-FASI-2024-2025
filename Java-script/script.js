const cart = [];

    function addToCart(name, price) {
      const item = cart.find(i => i.name === name);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      updateCart();
    }

    function removeItem(name) {
      const index = cart.findIndex(i => i.name === name);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      updateCart();
    }

    function changeQuantity(name, amount) {
      const item = cart.find(i => i.name === name);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
          removeItem(name);
        }
      }
      updateCart();
    }

    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const totalSpan = document.getElementById('total');
      cartItems.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          ${item.name} - ${item.quantity} x ${item.price}€ 
          <div>
            <button onclick="changeQuantity('${item.name}', 1)">+</button>
            <button onclick="changeQuantity('${item.name}', -1)">-</button>
            <button onclick="removeItem('${item.name}')">🗑️</button>
          </div>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price * item.quantity;
      });

      totalSpan.textContent = total.toFixed(2);
    }