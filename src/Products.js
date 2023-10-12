import React from 'react';

function Products({ product, onAddToCart }) {
  return (
    <div className='col-md-3'>
    <div className="product" key={product.id}>
      <h5 className='fw-bold'>{product.title}</h5>
      <img src={product.img} alt="/img"></img>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
    </div>
  );
}

export default Products;