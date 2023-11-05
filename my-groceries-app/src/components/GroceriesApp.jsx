import React, { useState } from 'react';
import InventoryCards from './InventoryCards';
import CartList from './CartList';
import products from '../data/products'; // Update the path as necessary

const GroceriesApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className="GroceriesApp-Container">
      <InventoryCards products={products} addToCart={addToCart} />
      <CartList cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} total={total} />
    </div>
  );
};

export default GroceriesApp;
