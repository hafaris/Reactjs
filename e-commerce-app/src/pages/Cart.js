import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>My Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
