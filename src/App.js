import React, { useState } from 'react';
import Products from './Products';
import CartOverlay from './CartOverlay';
import './App.css';
import image1 from "./images/image1.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const products = [
    {
      id: 1,
      title: "Samsung S21",
      description: "black in color",
      price: "2500",
      img: image1,
      quantity: 1,
    },
    {
      id: 2,
      title: "Samsung M21",
      description: "white in color",
      price: "2300",
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m215glbdins/gallery/in-galaxy-m-sm-m215glbdins-sm-m---glbhins-478397541?$624_624_PNG$",
      quantity: 1,
    },
    {
      id: 3,
      title: "Redmi 9",
      description: "black in color",
      price: "3500",
      img: image3,
      quantity: 1,
    },
    {
      id: 4,
      title: "Iphone 12",
      description: "Best mobile ever",
      price: "90500",
      img:image4,
      quantity: 1,
    },
    {
      id: 5,
      title: "Samsung Galaxy S20",
      description: "black in color",
      price: "2500",
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-g781bzbgins/gallery/in-galaxy-s20-fe-5g-g781-sm-g781bzbgins-thumb-405304976",
      quantity: 1,
    },
    {
      id: 6,
      title: "Redmi 10",
      description: "black in color",
      price: "3500",
      img: image5,
      quantity: 1,
    },
    {
      id: 7,
      title: "Vivo V27 Pro",
      description: "black in color",
      price: "2500",
      img: image6,
      quantity: 1,
    },
    {
      id: 8,
      title: "Iphone 13",
      description: "Best mobile ever",
      price: "90500",
      img: image7,
      quantity: 1,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setItemCount(itemCount + 1);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setItemCount(itemCount - 1);
  };

  return (
    <div className='container'>
    <div className="App">
      <div className='heading'>
      <h1>Shopping Cart App</h1>
      <div className='cart-icon'>
      {/* <CartIcon cartCount={cart.length} onClick={() => setIsCartOpen(true)} /> */}
      <i class="fa fa-shopping-cart" aria-hidden="true"onClick={() => setIsCartOpen(true)}>
      <span className="item-count">{itemCount}</span>
          </i>
          </div>
      </div>
      <div className="row products-info">
        {products.map((product) => (
          <Products key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      {/* {isCartOpen && (
          <div className="cart-container">
            <ShoppingCart cart={cart} onRemoveFromCart={removeFromCart} />
          </div>
        )} */}
        {isCartOpen && (
          <CartOverlay
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onCloseCart={() => setIsCartOpen(false)}
          />
        )}
    </div>
    </div>
  );
}

export default App;
