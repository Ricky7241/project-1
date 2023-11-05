import React from 'react';

const InventoryCards = ({ products, addToCart }) => {
  return (
    <div className="Inventory-Container">
      {products.map((product) => (
        <div key={product.id} className="Inventory-Card">
          <img src={product.image} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>{product.brand}</p>
          <p>{product.quantity}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default InventoryCards;
