import React from 'react';
import './CartOverlay.css';

function CartOverlay({ cart, onRemoveFromCart, onCloseCart }) {
  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <button onClick={onCloseCart} className="close-button">
          x
        </button>
        <ul>
          {cart.map((item) => (
            <li className="cart-items" key={item.id}>
              {item.title} - ${item.price}
              <button className="delete-button" onClick={() => onRemoveFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total: ${cart.reduce((total, item) => total + parseFloat(item.price), 0)}</p>
      </div>
    </div>
  );
}

export default CartOverlay;