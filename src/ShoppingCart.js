import React from 'react';

function ShoppingCart({ cart, onRemoveFromCart }) {
  return (
    <div className="shopping-cart">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button className="delete-button" onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default ShoppingCart;