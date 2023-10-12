import React from "react";

function CartIcon({ cartCount, onClick }) {
    return (
      <div className="cart-icon" onClick={onClick}>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart ({cartCount})
      </div>
    );
  }
  
  export default CartIcon;