import React from 'react';

const CartList = ({ cart, removeFromCart, emptyCart, total }) => {
  return (
    <div className="CartList-Container">
      <h2>Your Cart</h2>
      {/* Show the number of items in the cart with a specific label */}
      <p>No. of items: {cart.length}</p>
      {cart.length === 0 ? (
        <p>Your Cart is Empty!</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="CartList-Card">
                {item.productName} - ${parseFloat(item.price.replace('$', '')).toFixed(2)}
                <button onClick={() => removeFromCart(item.id)} className="Remove-Button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="CartList-Buttons">
            <button onClick={emptyCart} className="Empty-Cart-Button">
              Empty Cart
            </button>
            <button 
              onClick={() => alert(`Purchased items totaling $${total.toFixed(2)}`)}
              className="Buy-Total-Button"
            >
              Buy-Total: ${total.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
